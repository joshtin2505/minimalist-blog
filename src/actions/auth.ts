"use server"
import { signIn } from "@/auth"
import { LoginSchema } from "@/schemas/users"
import { AuthError } from "next-auth"

export async function loginActions(values: LoginSchema) {
  try {
    await signIn("credentials", {
      ...values,
      redirect: false,
    })
    return { success: true }
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message }
    }
    console.log(error)
    return { error: "Error 500" }
  }
}
