"use client"
import Header from "@/components/categories/Header"
import { Tabs } from "@/components/ui/tabs"
import React, { useEffect, useState } from "react"
// import categories from "@/mocks/section.json"
import Content from "@/components/categories/Content"
import { CategoryPureType } from "@/types"
import { getCategories } from "@/actions/categories"
import { set } from "zod"
import { toast } from "sonner"
function Categories() {
  const [categories, setCategories] = useState<CategoryPureType[]>([])
  useEffect(() => {
    ;(async () => {
      await getCategories()
        .then((res) => setCategories(res))
        .catch((error) => {
          toast.error(error)
          setCategories([])
        })
    })()
  }, [])
  if (categories.length === 0) return null
  return (
    <Tabs defaultValue={categories[0].name}>
      <section className="h-dvh pt-10">
        <Header categories={categories} />
        <Content categories={categories} />
      </section>
    </Tabs>
  )
}

export default Categories
