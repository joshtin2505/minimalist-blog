"use client"

import { getCategories } from "@/actions/categories"
import TextEditor from "@/components/TextEditor"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CategoryPureType } from "@/types"
import { X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "sonner"

// import TailwindAdvancedEditor from "@/components/text-editor/advanced-editor"
function New() {
  const [categories, setCategories] = useState<CategoryPureType[]>([])
  useEffect(() => {
    ;(async () => {
      await getCategories()
        .then((res) => setCategories(res))
        .catch((error) => {
          toast.error(error)
          console.log(error)
          setCategories([])
        })
    })()
  }, [])
  return (
    <div className="pt-4">
      <header className="flex justify-end w-full px-4 gap-4 items-center">
        <Select>
          {categories.length > 0 ? (
            <>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  {categories.map((category) => (
                    <>
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    </>
                  ))}
                </SelectGroup>
              </SelectContent>
            </>
          ) : (
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="No categories found" />
            </SelectTrigger>
          )}
        </Select>
        <Button variant="outline">Publicar</Button>
        <Button variant="default">Guardar</Button>
        <Link href="/dashboard/posts">
          <X size={24} className="cursor-pointer ml-5" />
        </Link>
      </header>
      <div className=""></div>
      <TextEditor />
    </div>
  )
}

export default New
