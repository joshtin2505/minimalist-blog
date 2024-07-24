"use client"
import { defaultEditorContent } from "@/lib/content"
import {
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  type EditorInstance,
  EditorRoot,
  type JSONContent,
} from "novel"
import { ImageResizer, handleCommandNavigation } from "novel/extensions"
import { useEffect, useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { defaultExtensions } from "@/lib/extensions"
import { ColorSelector } from "./selectors/color-selector"
import { LinkSelector } from "./selectors/link-selector"
import { NodeSelector } from "./selectors/node-selector"
import { MathSelector } from "./selectors/math-selector"
import { Separator } from "@/components/ui/separator"

import { handleImageDrop, handleImagePaste } from "novel/plugins"
import GenerativeMenuSwitch from "./generative/generative-menu-switch"
import { uploadFn } from "@/lib/image-upload"
import { TextButtons } from "./selectors/text-buttons"
import { slashCommand, suggestionItems } from "./slash-command"

import hljs from "highlight.js"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { createPost, getPost, updatePost } from "@/actions/posts"
import { Input } from "../ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { getCategories } from "@/actions/categories"
import { toast } from "sonner"
import { CategoryPureType } from "@/types"

const extensions = [...defaultExtensions, slashCommand]

const TailwindAdvancedEditor = () => {
  const [initialContent, setInitialContent] = useState<null | JSONContent>(null)
  const [saveStatus, setSaveStatus] = useState("Saved")
  const [charsCount, setCharsCount] = useState()

  const [openNode, setOpenNode] = useState(false)
  const [openColor, setOpenColor] = useState(false)
  const [openLink, setOpenLink] = useState(false)
  const [openAI, setOpenAI] = useState(false)

  const [categories, setCategories] = useState<CategoryPureType[]>([])

  //Apply Codeblock Highlighting on the HTML from editor.getHTML()
  const highlightCodeblocks = (content: string) => {
    const doc = new DOMParser().parseFromString(content, "text/html")
    doc.querySelectorAll("pre code").forEach((el) => {
      // @ts-ignore
      // https://highlightjs.readthedocs.io/en/latest/api.html?highlight=highlightElement#highlightelement
      hljs.highlightElement(el)
    })
    return new XMLSerializer().serializeToString(doc)
  }

  const debouncedUpdates = useDebouncedCallback(
    async (editor: EditorInstance) => {
      const json = editor.getJSON()
      setCharsCount(editor.storage.characterCount.words())
      const postId = window.localStorage.getItem("post-id")
      if (postId) {
        await getPost(postId).then((res) => {
          updatePost({
            title: "New Post",
            content: JSON.stringify(json),
            html: highlightCodeblocks(editor.getHTML()),
            markdown: editor.storage.markdown.getMarkdown(),
            status: "DRAFT",
            authorId: "07bae10a-58c3-488e-81ee-2390207d70f8", // quitar la parte de authorId
            categoryId: "7a45d56a-702e-410e-b54f-98757084b82e",
            id: postId,
          })
        })
      }

      createPost({
        title: "New Post",
        content: JSON.stringify(json),
        html: highlightCodeblocks(editor.getHTML()),
        markdown: editor.storage.markdown.getMarkdown(),
        status: "DRAFT",
        authorId: "07bae10a-58c3-488e-81ee-2390207d70f8",
        categoryId: "7a45d56a-702e-410e-b54f-98757084b82e",
      })
        .then((res) => {
          window.localStorage.setItem("post-id", res.id)
          setSaveStatus("Saved")
        })
        .catch(() => console.log("Error Creating Post"))
    },
    500,
  )

  useEffect(() => {
    ;(async () => {
      const postId = window.localStorage.getItem("post-id")
      if (!postId) return setInitialContent(defaultEditorContent)
      await getPost(postId).then((res) => {
        if (!res) return setInitialContent(defaultEditorContent)
        setInitialContent(JSON.parse(res.content))
      })

      await getCategories()
        .then((res) => setCategories(res))
        .catch((error) => {
          toast.error(error)
          console.log(error)
          setCategories([])
        })
    })()
    ;(async () => {
      await getCategories()
        .then((res) => setCategories(res))
        .catch((error) => {
          toast.error(error)
          console.log(error)
          setCategories([])
        })
    })()
    return () => {
      window.localStorage.removeItem("post-id")
    }
  }, [])

  if (!initialContent) return null

  return (
    <div className="relative w-full flex flex-col gap-4 ">
      <div className="flex px-6 pt-6 pb-2 z-10 gap-2 w-full justify-between">
        <Link
          href="/dashboard/posts"
          className="hover:bg-muted/70 transition-colors rounded-full w-6 h-6 flex items-center"
        >
          <ArrowLeft className="w-6 h-6 text-muted-foreground" />
        </Link>
        <div className="flex gap-3">
          <div className="rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground">
            {saveStatus}
          </div>
          <div
            className={
              charsCount
                ? "rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground"
                : "hidden"
            }
          >
            {charsCount} Words
          </div>
        </div>
      </div>

      <div className="px-6">
        <div className="border-y border-muted py-3 flex gap-4">
          <Input
            type="text"
            defaultValue="Post Title"
            className="border-none"
            placeholder="Title of the post..."
          />
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
        </div>
      </div>
      <EditorRoot>
        <EditorContent
          initialContent={initialContent}
          extensions={extensions}
          className="relative w-full border-none bg-background min-h-dvh px-6 sm:border sm:shadow-lg"
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            handlePaste: (view, event) =>
              handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) =>
              handleImageDrop(view, event, moved, uploadFn),
            attributes: {
              class:
                "prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full",
            },
          }}
          onUpdate={({ editor }) => {
            debouncedUpdates(editor)
            setSaveStatus("Unsaved")
          }}
          slotAfter={<ImageResizer />}
        >
          <EditorCommand className="z-50 h-auto max-h-[330px] overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
            <EditorCommandEmpty className="px-2 text-muted-foreground">
              No results
            </EditorCommandEmpty>
            <EditorCommandList>
              {suggestionItems.map((item) => (
                <EditorCommandItem
                  value={item.title}
                  onCommand={(val) => item.command && item.command(val)}
                  className="flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent"
                  key={item.title}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </EditorCommandItem>
              ))}
            </EditorCommandList>
          </EditorCommand>

          <GenerativeMenuSwitch open={openAI} onOpenChange={setOpenAI}>
            <Separator orientation="vertical" />
            <NodeSelector open={openNode} onOpenChange={setOpenNode} />
            <Separator orientation="vertical" />

            <LinkSelector open={openLink} onOpenChange={setOpenLink} />
            <Separator orientation="vertical" />
            <MathSelector />
            <Separator orientation="vertical" />
            <TextButtons />
            <Separator orientation="vertical" />
            <ColorSelector open={openColor} onOpenChange={setOpenColor} />
          </GenerativeMenuSwitch>
        </EditorContent>
      </EditorRoot>
    </div>
  )
}

export default TailwindAdvancedEditor
