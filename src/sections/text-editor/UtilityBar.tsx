import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Editor } from "@tiptap/react"
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  CodeXml,
  Highlighter,
  Image,
  Italic,
  List,
  ListOrdered,
  Palette,
  Quote,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from "lucide-react"
import React from "react"

function UtilityBar({ editor }: { editor: Editor }) {
  const currentValue = editor.isActive("heading", { level: 1 })
    ? "heading1"
    : editor.isActive("heading", { level: 2 })
      ? "heading2"
      : editor.isActive("heading", { level: 2 })
        ? "heading2"
        : editor.isActive("heading", { level: 3 })
          ? "heading3"
          : editor.isActive("heading", { level: 4 })
            ? "heading4"
            : editor.isActive("heading", { level: 5 })
              ? "lead"
              : editor.isActive("heading", { level: 6 })
                ? "large"
                : editor.isActive("code")
                  ? "code"
                  : editor.isActive("small")
                    ? "small"
                    : "paragraph"
  const handleTextType = (
    type:
      | "heading1"
      | "heading2"
      | "heading3"
      | "heading4"
      | "lead"
      | "large"
      | "small"
      | "code"
      | "paragraph",
  ) => {
    switch (type) {
      case "heading1":
        editor.chain().focus().toggleHeading({ level: 1 }).run()
        break
      case "heading2":
        editor.chain().focus().toggleHeading({ level: 2 }).run()
        break
      case "heading3":
        editor.chain().focus().toggleHeading({ level: 3 }).run()
        break
      case "heading4":
        editor.chain().focus().toggleHeading({ level: 4 }).run()
        break
      case "lead":
        editor.chain().focus().toggleHeading({ level: 5 }).run()
        break
      case "large":
        editor.chain().focus().toggleHeading({ level: 6 }).run()
        break
      case "small":
        editor.chain().focus().setSmall().run()
        break
      case "code":
        editor.chain().focus().toggleCode().run()
        break
      case "paragraph":
        editor.chain().focus().setParagraph().run()
        break
    }
  }
  return (
    <div className="control-group px-5 flex gap-1 h-10 items-center">
      <Select
        defaultValue={currentValue}
        onValueChange={handleTextType}
        value={currentValue}
      >
        <SelectTrigger className="w-40 border-none">
          <SelectValue placeholder="text types" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="heading1">Heading 1</SelectItem>
          <SelectItem value="heading2">Heading 2</SelectItem>
          <SelectItem value="heading3">Heading 3</SelectItem>
          <SelectItem value="heading4">Heading 4</SelectItem>
          <SelectItem value="lead">
            <p className="text-xl text-muted-foreground">Lead</p>
          </SelectItem>
          <SelectItem value="large">
            <p className="text-lg font-semibold">Large</p>
          </SelectItem>
          <SelectItem value="small">
            <p className="text-sm font-medium leading-none">Small</p>
          </SelectItem>
          <SelectItem value="code">
            <code>preformatted</code>
          </SelectItem>
          <SelectItem value="paragraph">
            <p className="leading-7 [&:not(:first-child)]:mt-6">Paragraph</p>
          </SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-1">
        <Button variant="ghost" className="p-0 size-8">
          <Bold size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <Italic size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <Underline size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <Strikethrough size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <Superscript size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <Subscript size={18} />
        </Button>
      </div>
      <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-1">
        <Button variant="ghost" className="p-0 size-8">
          <Palette size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <Highlighter size={18} />
        </Button>
      </div>
      <Separator orientation="vertical" className="h-8" />
      <Button variant="ghost" className="p-0 size-8">
        <Quote size={18} />
      </Button>
      <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-1">
        <Button variant="ghost" className="p-0 size-8">
          <List size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <ListOrdered size={18} />
        </Button>
      </div>
      <Separator orientation="vertical" className="h-8" />
      <Select defaultValue="left">
        <SelectTrigger className="w-16 border-none">
          <SelectValue placeholder={<AlignLeft size={18} />} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="left">
            <AlignLeft size={18} />
          </SelectItem>
          <SelectItem value="center">
            <AlignCenter size={18} />
          </SelectItem>
          <SelectItem value="justify">
            <AlignJustify size={18} />
          </SelectItem>
          <SelectItem value="right">
            <AlignRight size={18} />
          </SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-1">
        <Button variant="ghost" className="p-0 size-8">
          <Image size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <CodeXml size={18} />
        </Button>
      </div>
    </div>
  )
}

export default UtilityBar
