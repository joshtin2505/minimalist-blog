const { categories, users } = require("../lib/placeholder-data")
const bcrypt = require("bcryptjs")
const { PrismaClient } = require("@prisma/client")
const db = new PrismaClient()
async function seedUsers() {
  try {
    const insertedUsers = db.user.createMany({
      data: users.map((user) => ({
        email: user.email,
        username: user.username,
        password: bcrypt.hashSync(user.password, 10),
        name: user.name,
        lastname: user.lastName,
      })),
      skipDuplicates: true,
    })

    return insertedUsers
  } catch (error) {
    console.error("Error seeding users:", error)
  }
}
async function seedCategories() {
  try {
    const users = await db.user.findMany()
    const insertedCategories = await db.categories.createMany({
      data: categories.map((category) => ({
        name: category.name,
        imagesrc: category.imagesrc,
        createdById: users[0].id,
      })),

      skipDuplicates: true,
    })
    return insertedCategories
  } catch (error) {
    console.error("Error seeding users:", error)
  }
}

// TODO: Add  table for posts, and reactions

async function main() {
  await seedUsers()
  await seedCategories()
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err)
})
