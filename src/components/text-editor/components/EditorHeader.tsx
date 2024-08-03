import { Icon } from "@/components/ui/icon"
import { EditorInfo } from "./EditorInfo"
import { EditorUser } from "../types"
import { WebSocketStatus } from "@hocuspocus/provider"
import { Toolbar } from "@/components/ui/toolbar"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { CategoryPureType } from "@/types"
import { getCategories } from "@/actions/categories"
import { toast } from "sonner"

export type EditorHeaderProps = {
  isSidebarOpen?: boolean
  toggleSidebar?: () => void
  characters: number
  words: number
  collabState: WebSocketStatus
  users: EditorUser[]
}

export const EditorHeader = ({
  characters,
  collabState,
  users,
  words,
  isSidebarOpen,
  toggleSidebar,
}: EditorHeaderProps) => {
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
    <div className="flex flex-row items-center justify-between flex-none py-2 pl-6 pr-3 text-black bg-white border-b border-neutral-200 dark:bg-black dark:text-white dark:border-neutral-800">
      <div className="flex flex-row gap-x-1.5 items-center">
        <div className="flex items-center gap-x-1.5">
          <Toolbar.Button
            tooltip={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            onClick={toggleSidebar}
            active={isSidebarOpen}
            className={isSidebarOpen ? "bg-transparent" : ""}
          >
            <Icon name={isSidebarOpen ? "PanelLeftClose" : "PanelLeft"} />
          </Toolbar.Button>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <header className="flex justify-end w-auto px-4 gap-4 items-center">
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
        </header>
        <EditorInfo
          characters={characters}
          words={words}
          collabState={collabState}
          users={users}
        />
        <Link href="/dashboard/posts">
          <X size={24} className="cursor-pointer ml-5" />
        </Link>
      </div>
    </div>
  )
}
