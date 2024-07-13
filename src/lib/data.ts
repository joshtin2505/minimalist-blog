import { CategoryType } from "@/types.d"
import { sql } from "@vercel/postgres"

export async function fetchCategories() {
  const { rows } =
    await sql<CategoryType>`SELECT name, value, image_src FROM categories`
  return rows
}
