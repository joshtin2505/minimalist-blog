"use server"

import { db } from "@/lib/db"

export async function getCategories() {
  console.log("render")
  try {
    const rows = await db.categories.findMany()
    console.log(rows)
    return rows
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch categories")
  }
}
