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
import UtilityBar from "@/sections/text-editor/UtilityBar"
import { CategoryPureType } from "@/types"
import { Plus, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "sonner"

import extensions from "@/lib/editor"
import { FloatingMenu, useEditor } from "@tiptap/react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import FloatingMenuOptions from "@/sections/text-editor/FloatingMenuOptions"

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
  const editor = useEditor({
    extensions,
    editable: true,
    autofocus: true,
    onUpdate: ({ editor }) => {
      const doc = editor.state.doc

      // Verificar si la primera línea es un encabezado
      // if (!doc.firstChild || doc.firstChild.type.name !== "heading") {
      //   editor.chain().focus().setNode("heading", { level: 1 }).run()
      // }
    },
    content: "<h5>Hello, World!</h5>",
    injectCSS: true,
  })
  if (!editor) return null

  return (
    <div className="pt-4 flex flex-col gap-2">
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
      <UtilityBar editor={editor} />
      <div className="px-4 ">
        <Input
          type="text"
          placeholder="What's the title of your post? "
          className="w-full py-2 border-none bg-transparent text-2xl font-bold focus-visible:ring-transparent capitalize"
        />
        <Popover>
          <PopoverTrigger className="">
            <Button
              variant="outline"
              className="flex items-center gap-2 p-0.5 px-2"
            >
              <Plus size={18} />
              Agregar etiqueta
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Input
              type="text"
              placeholder="Type a tag and press Enter"
              className="w-full py-2 border-none bg-transparent text-lg"
            />
          </PopoverContent>
        </Popover>
      </div>
      <FloatingMenuOptions editor={editor} />

      <TextEditor editor={editor} />
    </div>
  )
}

export default New
