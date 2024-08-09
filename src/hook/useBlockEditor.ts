"use client"
import { useEffect, useMemo, useState } from "react"

import { Editor, useEditor } from "@tiptap/react"
import Collaboration from "@tiptap/extension-collaboration"
import CollaborationCursor from "@tiptap/extension-collaboration-cursor"
import { TiptapCollabProvider, WebSocketStatus } from "@hocuspocus/provider"
import type { Doc as YDoc } from "yjs"

import { userColors, userNames } from "../lib/constants"
import { randomElement } from "../lib/utils"
import { EditorUser } from "../components/text-editor/types"
import { useSidebar } from "./useSidebar"
// import { initialContent } from '@/lib/data/initialContent'
import ExtensionKit from "@/lib/utils/extension-kit"

declare global {
  interface Window {
    editor: Editor | null
  }
}

export const useBlockEditor = ({
  ydoc,
  provider,
  initialContent,
}: {
  ydoc: YDoc
  provider?: TiptapCollabProvider | null | undefined
  initialContent: { type: string; content: any[] } | null
}) => {
  const leftSidebar = useSidebar()
  const [collabState, setCollabState] = useState<WebSocketStatus>(
    WebSocketStatus.Connecting,
  )
  const editor = useEditor(
    {
      autofocus: true,
      // onCreate: ({ editor }) => {
      //   provider?.on("synced", () => {
      //     if (editor.isEmpty) {
      //       editor.commands.setContent(initialContent)
      //     } else {
      //       editor.commands.setContent(initialContent)
      //     }
      //   })
      // },
      content: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Este es el contenido por defecto" },
            ],
          },
        ],
      },
      extensions: [
        ...ExtensionKit({
          provider,
        }),
        Collaboration.configure({
          document: ydoc,
        }),
        CollaborationCursor.configure({
          provider,
          user: {
            name: randomElement(userNames),
            color: randomElement(userColors),
          },
        }),
      ],
      editorProps: {
        attributes: {
          autocomplete: "off",
          autocorrect: "off",
          autocapitalize: "off",
          class: "min-h-full",
        },
      },
      immediatelyRender: false,
    },
    [ydoc, provider],
  )

  const users = useMemo(() => {
    if (!editor?.storage.collaborationCursor?.users) {
      return []
    }

    return editor.storage.collaborationCursor?.users.map((user: EditorUser) => {
      const names = user.name?.split(" ")
      const firstName = names?.[0]
      const lastName = names?.[names.length - 1]
      const initials = `${firstName?.[0] || "?"}${lastName?.[0] || "?"}`

      return { ...user, initials: initials.length ? initials : "?" }
    })
  }, [editor?.storage.collaborationCursor?.users])

  const characterCount = editor?.storage.characterCount || {
    characters: () => 0,
    words: () => 0,
  }

  useEffect(() => {
    provider?.on("status", (event: { status: WebSocketStatus }) => {
      setCollabState(event.status)
    })
  }, [provider])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.editor = editor
    }
  }, [editor])

  return { editor, users, characterCount, collabState, leftSidebar }
}
