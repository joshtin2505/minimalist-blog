"use server"
import { LoginSchema } from "@/schemas/users"
import useStore from "@/store/useStore"
import { ReturnLoginType, USER_STATUS } from "@/types.d"
import { sql } from "@vercel/postgres"
import bcrypt from "bcrypt"

export async function loginUser(data: LoginSchema): Promise<ReturnLoginType> {
  const { email, password } = data

  try {
    const { rows } = await sql`
    SELECT id, email, password, name, last_name, username
    FROM users
    WHERE email = ${email}
    `
    if (rows.length === 0) {
      console.log("Email not found")
      return { status: USER_STATUS.MAIL_NOT_FOUND }
    }
    const isMatch = await bcrypt.compare(password, rows[0].password)

    if (isMatch) {
      console.log("User logged in")
      return {
        status: USER_STATUS.LOGGED,
        user: {
          id: rows[0].id,
          email: rows[0].email,
          name: rows[0].name,
          lastname: rows[0].last_name,
          username: rows[0].username,
        },
      }
    } else {
      return { status: USER_STATUS.PASSWORD_NOT_MATCH }
    }
  } catch (error) {
    console.error(error)
    return { status: USER_STATUS.INTERNAL_ERROR }
  }
}
