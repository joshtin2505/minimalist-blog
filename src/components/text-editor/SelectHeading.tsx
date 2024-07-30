import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useHeading from "@/hook/useHeading"
import { Editor } from "@tiptap/react"
import {
  AArrowDown,
  AArrowUp,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Pilcrow,
  Terminal,
  Type,
} from "lucide-react"
import React from "react"

function SelectHeading({ editor }: { editor: Editor }) {
  const { currentValue, handleTextType } = useHeading({ editor })
  return (
    <Select
      defaultValue={currentValue}
      onValueChange={handleTextType}
      value={currentValue}
    >
      <SelectTrigger className="w-40 border-none">
        <SelectValue placeholder="text types" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Headings</SelectLabel>
          <SelectItem value="heading1">
            <div className="flex">
              <Heading1 size={18} className="mr-2" /> Heading 1
            </div>
          </SelectItem>
          <SelectItem value="heading2">
            <div className="flex">
              <Heading2 size={18} className="mr-2" /> Heading 2
            </div>
          </SelectItem>
          <SelectItem value="heading3">
            <div className="flex">
              <Heading3 size={18} className="mr-2" /> Heading 3
            </div>
          </SelectItem>
          <SelectItem value="heading4">
            <div className="flex">
              <Heading4 size={18} className="mr-2" /> Heading 4
            </div>
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />

        <SelectGroup>
          <SelectLabel>Sizes</SelectLabel>
          <SelectItem value="lead">
            <div className="flex">
              <Type size={16} className="mr-2" /> Lead
            </div>
          </SelectItem>
          <SelectItem value="large">
            <div className="flex">
              <AArrowUp size={16} className="mr-2" /> Large
            </div>
          </SelectItem>
          <SelectItem value="small">
            <div className="flex">
              <AArrowDown size={16} className="mr-2" /> Small
            </div>
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Formats</SelectLabel>
          <SelectItem value="code">
            <div className="flex">
              <Terminal size={16} className="mr-2" /> Preformatted
            </div>
          </SelectItem>
          <SelectItem value="paragraph">
            <div className="flex items-center">
              <Pilcrow size={16} className="mr-2" /> Paragraph
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectHeading
