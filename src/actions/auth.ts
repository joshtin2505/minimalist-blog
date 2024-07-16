"use server"
import { signIn } from "@/auth"
import { LoginSchema } from "@/schemas/users"
import { AuthError } from "next-auth"

export async function loginActions(values: LoginSchema) {
  try {
    await signIn("credentials", {
      ...values,
      redirect: true,
    })
    return { success: true }
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message }
    }
    return { error: "Error 500" }
  }
}
