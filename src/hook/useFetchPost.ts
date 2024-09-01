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
            const mapedRes: PostResType[] = res.map((post) => {
              return {
                ...post,

                category: {
                  createdAt: post.category?.createdAt as Date,
                  createdById: post.category?.createdById as string,
                  id: post.category?.id as string,
                  imagesrc: post.category?.imagesrc as string,
                  name: post.category?.name as string,
                  updatedAt: post.category?.updatedAt as Date,
                },
              }
            })
            setResponse({
              data: {
                allPosts: mapedRes.filter((post) => post.status !== "DELETED"),
                drafts: mapedRes.filter((post) => post.status === "DRAFT"),
                published: mapedRes.filter(
                  (post) => post.status === "PUBLISHED",
                ),
                archived: mapedRes.filter((post) => post.status === "ARCHIVED"),
                deleted: mapedRes.filter((post) => post.status === "DELETED"),
                programmed: mapedRes.filter(
                  (post) => post.status === "PROGRAMMED",
                ),
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
