"use server"
import { put } from "@vercel/blob"

export async function uploadImage(file: File): Promise<string> {
  try {
    const filenames = `${Date.now()}-${file.name}`

    const { url } = await put(filenames, file, {
      access: "public",
    })

    return url
  } catch (error) {
    console.error(error)
    throw new Error("Failed to upload image")
  }
}
