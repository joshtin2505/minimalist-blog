import { ContentTypePicker } from "@/components/text-editor/menus/TextMenu/components/ContentTypePicker"
import { FontFamilyPicker } from "@/components/text-editor/menus/TextMenu/components/FontFamilyPicker"
import { FontSizePicker } from "@/components/text-editor/menus/TextMenu/components/FontSizePicker"
import { useTextmenuCommands } from "@/components/text-editor/menus/TextMenu/hooks/useTextmenuCommands"
import { useTextmenuContentTypes } from "@/components/text-editor/menus/TextMenu/hooks/useTextmenuContentTypes"
import { useTextmenuStates } from "@/components/text-editor/menus/TextMenu/hooks/useTextmenuStates"
import { ColorPicker } from "@/components/text-editor/panels/Colorpicker"
import ToggleTip from "@/components/text-editor/ToggleTip"
import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"
import { Toolbar } from "@/components/ui/toolbar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import * as Popover from "@radix-ui/react-popover"
import { Surface } from "@/components/ui/surface"

import { Editor } from "@tiptap/react"
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Book,
  Code,
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
  SquareCode,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  Underline,
} from "lucide-react"
import React, { memo } from "react"

const MemoToggel = memo(ToggleTip)
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
    <div className="control-group px-5 flex gap-x-1 h-10 items-center mt-2 max-w-screen-xl w-full mx-auto">
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
      <div className="flex gap-x-0.5">
        <MemoToggel
          tooltip="Bold"
          toggleProps={{
            pressed: states.isBold,
            onPressedChange: commands.onBold,
            className: "hover:text-white p-0 size-9",
          }}
        >
          <Bold size={18} />
        </MemoToggel>
        <MemoToggel
          tooltip="Italic"
          toggleProps={{
            pressed: states.isItalic,
            onPressedChange: commands.onItalic,
            className: "hover:text-white p-0 size-9",
          }}
        >
          <Italic size={18} />
        </MemoToggel>
        <MemoToggel
          tooltip="Underline"
          toggleProps={{
            pressed: states.isUnderline,
            onPressedChange: commands.onUnderline,
            className: "hover:text-white p-0 size-9",
          }}
        >
          <Underline size={18} />
        </MemoToggel>
        <MemoToggel
          tooltip="Strikethrough"
          toggleProps={{
            pressed: states.isStrike,
            onPressedChange: commands.onStrike,
            className: "hover:text-white p-0 size-9",
          }}
        >
          <Strikethrough size={18} />
        </MemoToggel>
        <MemoToggel
          tooltip="Code"
          toggleProps={{
            pressed: states.isCode,
            onPressedChange: commands.onCode,
            className: "hover:text-white p-0 size-9",
          }}
        >
          <Code size={18} />
        </MemoToggel>
        <MemoToggel
          tooltip="Subscript"
          toggleProps={{
            pressed: states.isSubscript,
            onPressedChange: commands.onSubscript,
            className: "hover:text-white p-0 size-9",
          }}
        >
          <Subscript size={18} />
        </MemoToggel>
        <MemoToggel
          tooltip="Superscript"
          toggleProps={{
            pressed: states.isSuperscript,
            onPressedChange: commands.onSuperscript,
            className: "hover:text-white p-0 size-9",
          }}
        >
          <Superscript size={18} />
        </MemoToggel>
      </div>
      <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-x-0.5">
        <Popover.Root>
          <Popover.Trigger asChild>
            <MemoButton
              tooltip="Highlight text"
              active={!!states.currentHighlight}
            >
              <Highlighter />
            </MemoButton>
          </Popover.Trigger>
          <Popover.Content side="top" sideOffset={8} asChild>
            <Surface className="p-1">
              <MemoColorPicker
                color={states.currentHighlight}
                onChange={commands.onChangeHighlight}
                onClear={commands.onClearHighlight}
              />
            </Surface>
          </Popover.Content>
        </Popover.Root>
        <Popover.Root>
          <Popover.Trigger asChild>
            <MemoButton active={!!states.currentColor} tooltip="Text color">
              <Palette />
            </MemoButton>
          </Popover.Trigger>
          <Popover.Content side="top" sideOffset={8} asChild>
            <Surface className="p-1">
              <MemoColorPicker
                color={states.currentColor}
                onChange={commands.onChangeColor}
                onClear={commands.onClearColor}
              />
            </Surface>
          </Popover.Content>
        </Popover.Root>
      </div>
      {/* <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-x-0.5">
        <Button variant="ghost" className="p-0 size-9">
          <List size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-9">
          <ListOrdered size={18} />
        </Button>
        <Button variant="ghost" className="p-0 size-9">
          <ListTodo size={18} />
        </Button>
      </div> */}
      <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-x-0.5">
        <MemoToggel
          tooltip="Align left"
          toggleProps={{
            pressed: states.isAlignLeft,
            onPressedChange: commands.onAlignLeft,
            className: "hover:text-white",
          }}
        >
          <AlignLeft size={18} />
        </MemoToggel>
        <MemoToggel
          tooltip="Align center"
          toggleProps={{
            pressed: states.isAlignCenter,
            onPressedChange: commands.onAlignCenter,
            className: "hover:text-white",
          }}
        >
          <AlignCenter size={18} />
        </MemoToggel>
        <MemoToggel
          tooltip="Align right"
          toggleProps={{
            pressed: states.isAlignRight,
            onPressedChange: commands.onAlignRight,
            className: "hover:text-white",
          }}
        >
          <AlignRight size={18} />
        </MemoToggel>
        <MemoToggel
          tooltip="Justify"
          toggleProps={{
            pressed: states.isAlignJustify,
            onPressedChange: commands.onAlignJustify,
            className: "hover:text-white",
          }}
        >
          <AlignJustify size={18} />
        </MemoToggel>
      </div>
      <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-x-0.5">
        <MemoButton
          tooltip="Blockquote"
          variant="ghost"
          className="p-0 size-9"
          onClick={() => editor.chain().focus().setBlockquote().run()}
        >
          <Quote size={18} />
        </MemoButton>
        <MemoButton
          tooltip="Image"
          variant="ghost"
          className="p-0 size-9"
          onClick={() => editor.chain().focus().setImageUpload().run()}
        >
          <Image size={18} />
        </MemoButton>
        <MemoToggel
          tooltip="Code Block"
          toggleProps={{
            pressed: editor.isActive("codeBlock"),
            onPressedChange: () =>
              editor.chain().focus().toggleCodeBlock().run(),
            className: "p-0 size-9",
          }}
        >
          <SquareCode size={18} />
        </MemoToggel>
      </div>
      <Separator orientation="vertical" className="h-8" />
      <div className="flex gap-x-0.5">
        <MemoButton
          tooltip="Horizontal rule"
          variant="ghost"
          className="p-0 size-9"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus size={18} />
        </MemoButton>
        <MemoButton
          tooltip="Table"
          variant="ghost"
          className="p-0 size-9"
          disabled={editor.isActive("columns")}
          onClick={() =>
            editor
              .chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: false })
              .run()
          }
        >
          <Table size={18} />
        </MemoButton>
        <MemoButton
          disabled={editor.isActive("columns")}
          tooltip="Table of contents"
          variant="ghost"
          className="p-0 size-9"
          onClick={() => editor.chain().focus().insertTableOfContents().run()}
        >
          <Book size={18} />
        </MemoButton>
      </div>
    </div>
  )
}

export default UtilityBar
