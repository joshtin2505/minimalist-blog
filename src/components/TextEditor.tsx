"use client"
import React from "react"
import extensions from "@/lib/editor"
import { Editor, EditorContent } from "@tiptap/react"

function TextEditor({ editor }: { editor: Editor }) {
  return <EditorContent className="w-full" editor={editor} />
}

export default TextEditor
