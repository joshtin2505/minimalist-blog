const { db } = require("@vercel/postgres")
const { categories, users } = require("../lib/placeholder-data")
const bcrypt = require("bcrypt")
async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        username VARCHAR(30) NOT NULL UNIQUE,
        email VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,
        created_by UUID ,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const { name, lastName, email, password, username } = user
        const hashedPassword = await bcrypt.hash(password, 10)
        return client.sql`
        INSERT INTO users (name, email, password, last_name, username)
          VALUES (${name}, ${email}, ${hashedPassword}, ${lastName}, ${username})
          ON CONFLICT (id) DO NOTHING;
      `
      }),
    )
    console.log(`Seeded ${insertedUsers.length} users`)

    return {
      createTable,
      users: insertedUsers,
    }
  } catch (error) {
    console.error("Error seeding users:", error)
    // throw error
  }
}
async function seedCategories(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS categories (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(30) NOT NULL UNIQUE,
        value VARCHAR(30) NOT NULL UNIQUE,
        image_src TEXT NOT NULL,
        created_by UUID NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
      );`

    const users = await client.sql`SELECT id FROM users`
    const insertedCategories = await Promise.all(
      categories.map(async (category) => {
        const { imageSrc, name, value } = category
        return client.sql`
          INSERT INTO categories (name, value, image_src, created_by)
            VALUES (${name}, ${value}, ${imageSrc}, ${users.rows[0].id})
            ON CONFLICT (id) DO NOTHING;
        `
      }),
    )
    console.log(`Seeded ${insertedCategories.length} categories`)
    return {
      createTable,
      categories: insertedCategories,
    }
  } catch (error) {
    console.error("Error seeding users:", error)
    // throw error
  }
}

// TODO: Add  table for posts, and reactions

async function main() {
  const client = await db.connect()
  await seedUsers(client)
  await seedCategories(client)

  await client.end()
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err)
})
