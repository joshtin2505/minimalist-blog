"use client"
import { useParams } from "next/navigation"
import React from "react"

const blogPosts = ["FIRST-PAGE", "SECOND-PAGE", "THIRD-PAGE"]
function Page() {
  const { name } = useParams()

  return (
    <div>
      {Array.isArray(name)
        ? "Page not found"
        : blogPosts.includes(name)
        ? name
        : "Page not found"}
    </div>
  )
}

export default Page
