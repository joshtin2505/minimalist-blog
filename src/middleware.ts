import NextAuth from "next-auth"
import authConfig from "../auth.config"
import { NextResponse } from "next/server"

const { auth: middleware } = NextAuth(authConfig)

const publicRoutes = ["/", "/forgot-password", "/verify-email"]
const authRoutes = ["/login", "/register"]
const apiAuthPrefix = "/api/auth"
export default middleware((req) => {
  const { nextUrl, auth } = req
  const isLoggedIn = !!auth?.user

  // Permitir todas las rutas de API de autenticación
  if (nextUrl.pathname.startsWith(apiAuthPrefix)) {
    return NextResponse.next()
  }

  if (isLoggedIn && authRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl))
  }

  if (
    !isLoggedIn &&
    !authRoutes.includes(nextUrl.pathname) &&
    !publicRoutes.includes(nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/login", nextUrl))
  }
  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
