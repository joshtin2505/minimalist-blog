"use client"
import useStore from "@/store/useStore"
import { useRouter } from "next/navigation"
import React from "react"

function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  const { push } = useRouter()
  const { auth } = useStore()
  if (!auth) {
    push("/login")
    return null
  }
  return <>{children}</>
}

export default ProtectedRoutes
