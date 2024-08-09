"use client"

import "iframe-resizer/js/iframeResizer.contentWindow"

import { useEffect, useLayoutEffect, useMemo, useState } from "react"

import BlockEditor from "@/components/text-editor/BlockEditor"
import { useSearchParams } from "next/navigation"
import { TiptapCollabProvider } from "@hocuspocus/provider"
import { Doc as YDoc } from "yjs"

function New({ params }: { params: { post: string } }) {
  const [provider, setProvider] = useState<TiptapCollabProvider | null>(null)
  const [collabToken, setCollabToken] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const { post } = params

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch("/api/collaboration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json()

      const { token } = data

      // set state when the data received
      setCollabToken(token)
    }

    dataFetch()
  }, [])

  const ydoc = useMemo(() => new YDoc(), [])

  const hasCollab = parseInt(searchParams.get("noCollab") as string) !== 1
  useLayoutEffect(() => {
    if (hasCollab && collabToken) {
      setProvider(
        new TiptapCollabProvider({
          name: `${process.env.NEXT_PUBLIC_COLLAB_DOC_PREFIX}${post}`,
          appId: process.env.NEXT_PUBLIC_TIPTAP_COLLAB_APP_ID ?? "",
          token: collabToken,
          document: ydoc,
        }),
      )
    }
  }, [setProvider, collabToken, ydoc, post, hasCollab])

  if (hasCollab && (!collabToken || !provider)) return

  return (
    <div className="">
      <BlockEditor
        hasCollab={hasCollab}
        ydoc={ydoc}
        provider={provider}
        postId={post}
      />
    </div>
  )
}

export default New
