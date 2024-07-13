"use client"
import Header from "@/components/categories/Header"
import { Tabs } from "@/components/ui/tabs"
import React, { useEffect, useState } from "react"
// import categories from "@/mocks/section.json"
import Content from "@/components/categories/Content"
import { fetchCategories } from "@/lib/data"
import { CategoriesType } from "@/types"
function Categories() {
  const [categories, setCategories] = useState<CategoriesType>([])
  useEffect(() => {
    ;(async () => {
      setCategories(await fetchCategories())
    })()
  }, [])
  if (categories.length === 0) return null
  return (
    <Tabs defaultValue={categories[0].value}>
      <section className="h-dvh pt-10">
        <Header categories={categories} />
        <Content categories={categories} />
      </section>
    </Tabs>
  )
}

export default Categories
