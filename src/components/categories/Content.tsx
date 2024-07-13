import { CategoriesType } from "@/types"
import { TabsContent } from "../ui/tabs"
import Image from "next/image"

function Content({ categories = [] }: { categories: CategoriesType }) {
  return (
    <>
      {categories.length > 0 &&
        categories.map((category) => {
          const { value, name } = category
          return (
            <TabsContent
              value={value}
              key={value}
              className="pb-4 pt-2 h-[94%]"
            >
              {/* <h3 className="text-3xl">{name}</h3> */}
              <Image
                className="w-full object-cover h-full aspect-auto rounded grayscale"
                src={category.imageSrc}
                alt={name}
                width={2000}
                height={2000}
              />
            </TabsContent>
          )
        })}
    </>
  )
}

export default Content
