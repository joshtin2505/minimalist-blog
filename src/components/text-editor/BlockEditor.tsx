"use client"

import { EditorContent, PureEditorContent } from "@tiptap/react"
import React, { useEffect, useMemo, useRef, useState } from "react"

import {
  ContentItemMenu,
  LinkMenu,
  TextMenu,
} from "@/components/text-editor/menus"

import "@/styles/index.css"

import { Sidebar } from "@/components/text-editor/Sidebar"
import { EditorContext } from "@/context/EditorContext"
import ImageBlockMenu from "@/extensions/ImageBlock/components/ImageBlockMenu"
import { ColumnsMenu } from "@/extensions/MultiColumn/menus"
import { TableColumnMenu, TableRowMenu } from "@/extensions/Table/menus"
import { TiptapProps } from "./types"
import { EditorHeader } from "./components/EditorHeader"
import { useBlockEditor } from "@/hook/useBlockEditor"

import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

import UtilityBar from "@/sections/text-editor/UtilityBar"
import { Plus, X } from "lucide-react"

export const BlockEditor = ({ ydoc, provider }: TiptapProps) => {
  const menuContainerRef = useRef(null)

  const { editor, users, characterCount, collabState, leftSidebar } =
    useBlockEditor({ ydoc, provider })

  const displayedUsers = users.slice(0, 3)

  const providerValue = useMemo(() => {
    return {}
  }, [])

  if (!editor) {
    return null
  }

  return (
    <>
      <EditorContext.Provider value={providerValue}>
        <div className="flex h-full" ref={menuContainerRef}>
          <Sidebar
            isOpen={leftSidebar.isOpen}
            onClose={leftSidebar.close}
            editor={editor}
          />
          <div className="relative flex flex-col flex-1 h-full overflow-hidden">
            <EditorHeader
              characters={characterCount.characters()}
              collabState={collabState}
              users={displayedUsers}
              words={characterCount.words()}
              isSidebarOpen={leftSidebar.isOpen}
              toggleSidebar={leftSidebar.toggle}
            />
            <UtilityBar editor={editor} />
            <div className="px-4 max-w-screen-xl w-full mx-auto mt-2 ">
              <Input
                type="text"
                placeholder="What's the title of your post? "
                className="w-full mb-2 py-2 border-none bg-transparent text-2xl font-bold focus-visible:ring-transparent capitalize"
              />
              <Popover>
                <PopoverTrigger className="">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 p-0.5 px-2"
                  >
                    <Plus size={18} />
                    Agregar etiqueta
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Input
                    type="text"
                    placeholder="Type a tag and press Enter"
                    className="w-full py-2 border-none bg-transparent text-lg"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <EditorContent editor={editor} className="flex-1 overflow-y-auto" />
            <ContentItemMenu editor={editor} />
            <LinkMenu editor={editor} appendTo={menuContainerRef} />
            <TextMenu editor={editor} />
            <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
            <TableRowMenu editor={editor} appendTo={menuContainerRef} />
            <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
            <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />
          </div>
        </div>
      </EditorContext.Provider>
    </>
  )
}

export default BlockEditor
