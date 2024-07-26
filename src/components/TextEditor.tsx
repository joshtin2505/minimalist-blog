"use client"
import React from "react"
import extensions from "@/lib/editor"
import { EditorContent, useEditor } from "@tiptap/react"

function TextEditor() {
  const editor = useEditor({
    extensions,
    editable: true,
    autofocus: true,
    onUpdate: ({ editor }) => {
      const doc = editor.state.doc

      // Verificar si la primera línea es un encabezado
      if (!doc.firstChild || doc.firstChild.type.name !== "heading") {
        editor.chain().focus().setNode("heading", { level: 1 }).run()
      }
    },
    content: "<h1>New Post</h1>",
    injectCSS: true,
  })
  if (!editor) return null
  return <EditorContent className="w-full" editor={editor} />
}

export default TextEditor
