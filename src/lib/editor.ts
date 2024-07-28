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
import { createLowlight } from "lowlight"
import { ColorHighlighter, Muted, Small } from "./custom-extensions"
import { SmilieReplacer } from "./smilie-replacer"

export default [
  Text,
  Blockquote,
  bold,
  bubbleMenu,
  bulletList,
  code,
  codeBlock,
  codeBlockLowlight.configure({ lowlight: createLowlight() }),
  Document,
  Dropcursor,
  floatingMenu,
  FontFamily,
  handBreak,
  Heading,
  Hightlight,
  HorizontalRule,
  Image,
  Link,
  ListItem,
  Mention,
  Paragraph,
  Placeholder.configure({
    placeholder: ({ node }) => {
      if (node.type.name === "heading" && node.attrs.level === 1) {
        return "What's the title of your post?"
      }
      return "Write something amazing ..."
    },
  }),
  italic,
  Strike,
  TextAlign,
  listKeyMap,
  OrderList,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  Subscript,
  Superscript,
  Underline,
  TaskItem,
  TaskList,
  TextStyle,
  Typography,
  Youtube,
  Small,
  Muted,
  ColorHighlighter,
  SmilieReplacer,
]
