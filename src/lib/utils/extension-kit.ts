import { HocuspocusProvider } from "@hocuspocus/provider"

import Text from "@tiptap/extension-text"
import Blockquote from "@tiptap/extension-blockquote"
import bold from "@tiptap/extension-bold"
import bubbleMenu from "@tiptap/extension-bubble-menu"
import bulletList from "@tiptap/extension-bullet-list"
import code from "@tiptap/extension-code"
import codeBlock from "@tiptap/extension-code-block"
import codeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import Document from "@tiptap/extension-document"
import Dropcursor from "@tiptap/extension-dropcursor"
import floatingMenu from "@tiptap/extension-floating-menu"
import FontFamily from "@tiptap/extension-font-family"
import handBreak from "@tiptap/extension-hard-break"
import Heading from "@tiptap/extension-heading"
import Hightlight from "@tiptap/extension-highlight"
import HorizontalRule from "@tiptap/extension-horizontal-rule"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import ListItem from "@tiptap/extension-list-item"
import Mention from "@tiptap/extension-mention"
import Paragraph from "@tiptap/extension-paragraph"
import Placeholder from "@tiptap/extension-placeholder"
import italic from "@tiptap/extension-italic"
import Strike from "@tiptap/extension-strike"
import TextAlign from "@tiptap/extension-text-align"
import listKeyMap from "@tiptap/extension-list-keymap"
import OrderList from "@tiptap/extension-ordered-list"
import Table from "@tiptap/extension-table"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import TableRow from "@tiptap/extension-table-row"
import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import Underline from "@tiptap/extension-underline"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import TextStyle from "@tiptap/extension-text-style"
import Typography from "@tiptap/extension-typography"
import Youtube from "@tiptap/extension-youtube"
import { lowlight } from "lowlight"
import { Small } from "@/extensions/Small"
import { Muted } from "@/extensions/Muted"
import { ColorHighlighter } from "@/extensions/ColorHighlighter"
import { Column, Columns } from "@/extensions/MultiColumn"
import { TableOfContents } from "@tiptap-pro/extension-table-of-contents"
import { TableOfContentsNode } from "@/extensions/TableOfContentsNode"
import FileHandler from "@tiptap-pro/extension-file-handler"
import API from "../api"
import { ImageBlock } from "@/extensions/ImageBlock"
import { ImageUpload } from "@/extensions/ImageUpload"
import Emoji, { gitHubEmojis } from "@tiptap-pro/extension-emoji"
import emojiSuggestion from "@/extensions/Emojis/emojis"
import { SlashCommand } from "@/extensions/SlashCommand"
import { CharacterCount } from "@tiptap/extension-character-count"
import FocusClasses from "@tiptap/extension-focus"
import { Selection } from "@/extensions/Selection"
import { TrailingNode } from "@/extensions/TrailingNode"
import { Figure } from "@/extensions/Figure"
import { Figcaption } from "@/extensions/Figcaption"
import { BlockquoteFigure } from "@/extensions/BlockquoteFigure"
import { Quote } from "@/extensions/Quote"
import { QuoteCaption } from "@/extensions/QuoteCaption"
import Color from "@tiptap/extension-color"
import { FontSize } from "@/extensions/FontSize"
import StarterKit from "@tiptap/starter-kit"
import InvisibleCharacters from "@tiptap-pro/extension-invisible-characters"
import { ReactNodeViewRenderer } from "@tiptap/react"

interface ExtensionKitProps {
  provider?: HocuspocusProvider | null
  userId?: string
  userName?: string
  userColor?: string
}
const ExtensionKit = ({
  provider,
  userId,
  userName = "jostin",
}: ExtensionKitProps) => [
  Document,
  Columns,
  Column,
  Text,
  Blockquote,
  bold,
  bubbleMenu,
  bulletList,
  code,
  StarterKit.configure({
    document: false,
    dropcursor: false,
    heading: false,
    horizontalRule: false,
    blockquote: false,
    history: false,
    codeBlock: false,
  }),
  InvisibleCharacters.configure({
    visible: false,
  }),
  codeBlock,
  TableOfContents,
  TableOfContentsNode,
  codeBlockLowlight.configure({
    lowlight,
    defaultLanguage: null,
  }),
  ImageBlock,
  ImageUpload.configure({
    clientId: provider?.document?.clientID,
  }),
  FileHandler.configure({
    allowedMimeTypes: ["image/png", "image/jpeg", "image/gif", "image/webp"],
    onDrop: (currentEditor, files, pos) => {
      files.forEach(async () => {
        const url = await API.uploadImage()

        currentEditor.chain().setImageBlockAt({ pos, src: url }).focus().run()
      })
    },
    onPaste: (currentEditor, files) => {
      files.forEach(async () => {
        const url = await API.uploadImage()

        return currentEditor
          .chain()
          .setImageBlockAt({
            pos: currentEditor.state.selection.anchor,
            src: url,
          })
          .focus()
          .run()
      })
    },
  }),
  Dropcursor.configure({
    width: 2,
    class: "ProseMirror-dropcursor border-black",
  }),
  floatingMenu,
  FontFamily,
  handBreak,
  Heading.configure({
    levels: [1, 2, 3, 4, 5, 6],
  }),
  Hightlight.configure({ multicolor: true }),
  HorizontalRule,
  Image,
  Link.configure({
    openOnClick: false,
  }),
  ListItem,
  Mention,
  Paragraph,
  Placeholder.configure({
    includeChildren: true,
    showOnlyCurrent: false,
    placeholder: () => "",
  }),
  italic,
  Strike,
  TextAlign.extend({
    addKeyboardShortcuts() {
      return {}
    },
  }).configure({
    types: ["heading", "paragraph"],
  }),
  listKeyMap,
  OrderList,
  Table.configure({
    resizable: true,
  }),
  TableCell,
  TableHeader,
  TableRow,
  Subscript,
  Superscript,
  Underline,
  TaskItem.configure({
    nested: true,
  }),
  TaskList,
  TextStyle,
  Typography,
  Youtube,
  Small,
  Muted,
  ColorHighlighter,
  Emoji.configure({
    enableEmoticons: true,
    suggestion: emojiSuggestion,
    emojis: gitHubEmojis,
  }),
  SlashCommand,
  CharacterCount,
  FocusClasses,
  Selection,
  TrailingNode,
  Figure,
  Figcaption,
  BlockquoteFigure,
  Quote,
  QuoteCaption,
  Color,
  FontSize,
]

export default ExtensionKit
