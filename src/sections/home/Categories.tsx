import Header from "@/components/categories/Header"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import React from "react"
import categories from "@/mocks/section.json"
import Image from "next/image"
function Categories() {
  return (
    <Tabs defaultValue={categories[0].id}>
      <section className="h-dvh pt-10">
        <Header categories={categories} />
        {categories.map((category) => {
          const { id, name } = category
          return (
            <TabsContent value={id} key={id} className="pb-4 pt-2">
              {/* <h3 className="text-3xl">{name}</h3> */}
              <Image
                className="w-full object-cover h-full aspect-[16/7] rounded"
                src={category.imageSrc}
                alt={name}
                width={2000}
                height={2000}
              />
            </TabsContent>
          )
        })}
      </section>
    </Tabs>
  )
}

export default Categories
