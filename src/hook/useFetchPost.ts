import { getPosts } from "@/actions/posts"
import { PostResType } from "@/types"
import { useEffect, useState, useTransition } from "react"

interface UseFetchPostResponse {
  error: null
  data: {
    allPosts: PostResType[]
    drafts: PostResType[]
    published: PostResType[]
    archived: PostResType[]
    deleted: PostResType[]
    programmed: PostResType[]
  } | null
}
export default function useFetchPost() {
  const [isPending, startTransition] = useTransition()
  const [response, setResponse] = useState<UseFetchPostResponse>({
    data: null,
    error: null,
  })
  useEffect(() => {
    ;(() => {
      startTransition(async () => {
        await getPosts()
          .then((res) => {
            setResponse({
              data: {
                allPosts: res.filter((post) => post.status !== "DELETED"),
                drafts: res.filter((post) => post.status === "DRAFT"),
                published: res.filter((post) => post.status === "PUBLISHED"),
                archived: res.filter((post) => post.status === "ARCHIVED"),
                deleted: res.filter((post) => post.status === "DELETED"),
                programmed: res.filter((post) => post.status === "PROGRAMMED"),
              },
              error: null,
            })
          })
          .catch((error) => {
            setResponse({
              data: null,
              error: error,
            })
          })
      })
    })()
  }, [])
  return { isPending, response }
}
