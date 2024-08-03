import { Editor } from "@tiptap/react"

import { TableOfContentsNode } from "@/extensions/TableOfContentsNode"
import HorizontalRule from "@tiptap/extension-horizontal-rule"
import { ImageBlock } from "@/extensions/ImageBlock"
import { ImageUpload } from "@/extensions/ImageUpload"
import CodeBlock from "@tiptap/extension-code-block"
import Link from "@tiptap/extension-link"
import { Figcaption } from "@/extensions/Figcaption"

export const isTableGripSelected = (node: HTMLElement) => {
  let container = node

  while (container && !["TD", "TH"].includes(container.tagName)) {
    container = container.parentElement!
  }

  const gripColumn =
    container &&
    container.querySelector &&
    container.querySelector("a.grip-column.selected")
  const gripRow =
    container &&
    container.querySelector &&
    container.querySelector("a.grip-row.selected")

  if (gripColumn || gripRow) {
    return true
  }

  return false
}

export const isCustomNodeSelected = (editor: Editor, node: HTMLElement) => {
  const customNodes = [
    HorizontalRule.name,
    ImageBlock.name,
    ImageUpload.name,
    CodeBlock.name,
    ImageBlock.name,
    Link.name,
    Figcaption.name,
    TableOfContentsNode.name,
  ]

  return (
    customNodes.some((type) => editor.isActive(type)) ||
    isTableGripSelected(node)
  )
}

export default isCustomNodeSelected
