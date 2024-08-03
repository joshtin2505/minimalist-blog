import { ContentTypePicker } from "@/components/text-editor/menus/TextMenu/components/ContentTypePicker"
import { FontFamilyPicker } from "@/components/text-editor/menus/TextMenu/components/FontFamilyPicker"
import { FontSizePicker } from "@/components/text-editor/menus/TextMenu/components/FontSizePicker"
import { useTextmenuCommands } from "@/components/text-editor/menus/TextMenu/hooks/useTextmenuCommands"
import { useTextmenuContentTypes } from "@/components/text-editor/menus/TextMenu/hooks/useTextmenuContentTypes"
import { useTextmenuStates } from "@/components/text-editor/menus/TextMenu/hooks/useTextmenuStates"
import { ColorPicker } from "@/components/text-editor/panels/Colorpicker"
import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"
import { Toolbar } from "@/components/ui/toolbar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Editor } from "@tiptap/react"
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Book,
  CodeXml,
  Highlighter,
  Image,
  Italic,
  List,
  ListOrdered,
  ListTodo,
  Minus,
  Palette,
  Quote,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  Underline,
} from "lucide-react"
import React, { memo } from "react"

const MemoButton = memo(Toolbar.Button)
const MemoColorPicker = memo(ColorPicker)
const MemoFontFamilyPicker = memo(FontFamilyPicker)
const MemoFontSizePicker = memo(FontSizePicker)
const MemoContentTypePicker = memo(ContentTypePicker)

function UtilityBar({ editor }: { editor: Editor }) {
  const commands = useTextmenuCommands(editor)
  const states = useTextmenuStates(editor)
  const blockOptions = useTextmenuContentTypes(editor)
  return (
    <div className="control-group px-5 flex gap-2 h-10 items-center mt-2 max-w-screen-xl w-full mx-auto">
      <MemoContentTypePicker options={blockOptions} />
      <MemoFontFamilyPicker
        onChange={commands.onSetFont}
        value={states.currentFont || ""}
      />
      <MemoFontSizePicker
        onChange={commands.onSetFontSize}
        value={states.currentSize || ""}
      />
      <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-2">
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
      <div className="flex gap-2">
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
      <div className="flex gap-2">
        <Button variant="ghost" className="p-0 size-8">
          <List size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <ListOrdered size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <ListTodo size={18} />
        </Button>
      </div>
      <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-2">
        <Button variant="ghost" className="p-0 size-8">
          <AlignLeft size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <AlignCenter size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <AlignRight size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <AlignJustify size={18} />
        </Button>
      </div>
      <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-2">
        <Button variant="ghost" className="p-0 size-8">
          <Image size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-8">
          <CodeXml size={18} />
        </Button>
      </div>
      <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger>
            <Button variant="ghost" className="p-0 size-8">
              <Minus size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Horizontal rule</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="ghost" className="p-0 size-8">
              <Table size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Table</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="ghost" className="p-0 size-8">
              <Book size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Table of contents</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}

export default UtilityBar
