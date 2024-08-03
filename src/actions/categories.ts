"use server"

import { db } from "@/lib/db"

export async function getCategories() {
  try {
    const rows = await db.categories.findMany()
    return rows
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch categories")
  }
}
