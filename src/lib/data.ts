"use server"
import { db } from "./db"

export async function fetchCategories() {
  try {
    const rows = await db.categories.findMany()
    return rows
  } catch (error) {
    console.error(error)
    return []
  }
}
