"use server"
import { signIn } from "../auth"

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    console.log("formData", formData)
    await signIn("credentials", formData)
    return "Success"
  } catch (error) {
    if (error as unknown) {
      console.log("error", (error as any).type)
      console.log("error", error)
      switch ((error as any).type) {
        case "CredentialsSignin":
          return "Invalid credentials."
        default:
          return "Something went wrong."
      }
    }
    throw error
  }
}
