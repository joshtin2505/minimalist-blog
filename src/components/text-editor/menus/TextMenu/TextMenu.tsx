import { Icon } from "@/components/ui/icon"
import { Toolbar } from "@/components/ui/toolbar"
import { useTextmenuCommands } from "./hooks/useTextmenuCommands"
import { useTextmenuStates } from "./hooks/useTextmenuStates"
import { BubbleMenu, Editor } from "@tiptap/react"
import { memo } from "react"
import * as Popover from "@radix-ui/react-popover"
import { Surface } from "@/components/ui/surface"
import { FontFamilyPicker } from "./components/FontFamilyPicker"
import { FontSizePicker } from "./components/FontSizePicker"
import { useTextmenuContentTypes } from "./hooks/useTextmenuContentTypes"
import { ContentTypePicker } from "./components/ContentTypePicker"
import { EditLinkPopover } from "./components/EditLinkPopover"
import { ColorPicker } from "../../panels/Colorpicker"
import { Code, Code2, Highlighter, MoreVertical, Palette } from "lucide-react"
import ToggleTip from "../../ToggleTip"

// We memorize the button so each button is not rerendered
// on every editor state change
const MemoToggel = memo(ToggleTip)
const MemoButton = memo(Toolbar.Button)
const MemoColorPicker = memo(ColorPicker)
const MemoFontFamilyPicker = memo(FontFamilyPicker)
const MemoFontSizePicker = memo(FontSizePicker)
const MemoContentTypePicker = memo(ContentTypePicker)

export type TextMenuProps = {
  editor: Editor
}

export const TextMenu = ({ editor }: TextMenuProps) => {
  const commands = useTextmenuCommands(editor)
  const states = useTextmenuStates(editor)
  const blockOptions = useTextmenuContentTypes(editor)

  return (
    <BubbleMenu
      tippyOptions={{ popperOptions: { placement: "top-start" } }}
      editor={editor}
      pluginKey="textMenu"
      shouldShow={states.shouldShow}
      updateDelay={100}
    >
      <Toolbar.Wrapper className="text-muted-foreground hover:[&>button]:text-white">
        <MemoContentTypePicker options={blockOptions} />
        <MemoFontFamilyPicker
          onChange={commands.onSetFont}
          value={states.currentFont || ""}
        />
        <MemoFontSizePicker
          onChange={commands.onSetFontSize}
          value={states.currentSize || ""}
        />
        <Toolbar.Divider />
        <MemoToggel
          tooltip="Bold"
          toggleProps={{
            pressed: states.isBold,
            onPressedChange: commands.onBold,
            className: "hover:text-white",
          }}
        >
          <Icon name="Bold" />
        </MemoToggel>
        <MemoToggel
          tooltip="Italic"
          toggleProps={{
            pressed: states.isItalic,
            onPressedChange: commands.onItalic,
            className: "hover:text-white",
          }}
        >
          <Icon name="Italic" />
        </MemoToggel>
        <MemoToggel
          tooltip="Underline"
          toggleProps={{
            pressed: states.isUnderline,
            onPressedChange: commands.onUnderline,
            className: "hover:text-white",
          }}
        >
          <Icon name="Underline" />
        </MemoToggel>
        <MemoToggel
          tooltip="Strikehrough"
          toggleProps={{
            pressed: states.isStrike,
            onPressedChange: commands.onStrike,
            className: "hover:text-white",
          }}
        >
          <Icon name="Strikethrough" />
        </MemoToggel>
        <MemoToggel
          tooltip="Code"
          toggleProps={{
            pressed: states.isCode,
            onPressedChange: commands.onCode,
            className: "hover:text-white",
          }}
        >
          <Code />
        </MemoToggel>
        {/*  */}
        <MemoButton tooltip="Code block" onClick={commands.onCode}>
          <Code2 />
        </MemoButton>
        <EditLinkPopover onSetLink={commands.onLink} />
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
        <Popover.Root>
          <Popover.Trigger asChild>
            <MemoButton tooltip="More options">
              <MoreVertical />
            </MemoButton>
          </Popover.Trigger>
          <Popover.Content side="top" asChild className="text-muted-foreground">
            <Toolbar.Wrapper>
              <MemoToggel
                tooltip="Subscript"
                toggleProps={{
                  pressed: states.isSubscript,
                  onPressedChange: commands.onSubscript,
                  className: "hover:text-white",
                }}
              >
                <Icon name="Subscript" />
              </MemoToggel>
              <MemoToggel
                tooltip="Superscript"
                toggleProps={{
                  pressed: states.isSuperscript,
                  onPressedChange: commands.onSuperscript,
                  className: "hover:text-white",
                }}
              >
                <Icon name="Superscript" />
              </MemoToggel>
              <Toolbar.Divider />
              <MemoToggel
                tooltip="Align left"
                toggleProps={{
                  pressed: states.isAlignLeft,
                  onPressedChange: commands.onAlignLeft,
                  className: "hover:text-white",
                }}
              >
                <Icon name="AlignLeft" />
              </MemoToggel>
              <MemoToggel
                tooltip="Align center"
                toggleProps={{
                  pressed: states.isAlignCenter,
                  onPressedChange: commands.onAlignCenter,
                  className: "hover:text-white",
                }}
              >
                <Icon name="AlignCenter" />
              </MemoToggel>
              <MemoToggel
                tooltip="Align right"
                toggleProps={{
                  pressed: states.isAlignRight,
                  onPressedChange: commands.onAlignRight,
                  className: "hover:text-white",
                }}
              >
                <Icon name="AlignRight" />
              </MemoToggel>
              <MemoToggel
                tooltip="Justify"
                toggleProps={{
                  pressed: states.isAlignJustify,
                  onPressedChange: commands.onAlignJustify,
                  className: "hover:text-white",
                }}
              >
                <Icon name="AlignJustify" />
              </MemoToggel>
            </Toolbar.Wrapper>
          </Popover.Content>
        </Popover.Root>
      </Toolbar.Wrapper>
    </BubbleMenu>
  )
}
