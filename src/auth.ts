import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "../auth.config"
import { db } from "./lib/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  ...authConfig,
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    session({ session, user, token }) {
      if (user) {
        session.user.id = user.id
      } else if (token) {
        session.user.id = token.sub as string
      }
      return session
    },
  },
})
