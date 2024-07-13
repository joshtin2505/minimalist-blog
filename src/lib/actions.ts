"use server"
import { LoginSchema } from "@/schemas/users"
import { USER_STATUS } from "@/types.d"
import { sql } from "@vercel/postgres"
import bcrypt from "bcrypt"
export async function loginUser(data: LoginSchema): Promise<USER_STATUS> {
  const { email, password } = data

  try {
    const { rows } = await sql`
    SELECT id, email, password
    FROM users
    WHERE email = ${email}
    `
    if (rows.length === 0) {
      console.log("Email not found")
      return USER_STATUS.MAIL_NOT_FOUND
    }
    const isMatch = await bcrypt.compare(password, rows[0].password)

    if (isMatch) {
      return USER_STATUS.LOGGED
    } else {
      return USER_STATUS.PASSWORD_NOT_MATCH
    }
  } catch (error) {
    console.error(error)
    return USER_STATUS.INTERNAL_ERROR
  }
}
