import { loginSchema } from "@/schemas/users"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"

export default {
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      authorize: async (credentials) => {
        const { data, success } = loginSchema.safeParse(credentials)

        if (!success) {
          throw new Error("Invalid credentials")
        }

        const user = await db.user.findUnique({
          where: {
            email: data.email,
          },
        })
        if (!user || !user.password) {
          throw new Error("No user found")
        }
        const passwordsMatch = await bcrypt.compare(
          data.password,
          user.password,
        )
        if (!passwordsMatch) {
          throw new Error("Password does not match")
        }

        return user
      },
    }),
  ],
} satisfies NextAuthConfig
