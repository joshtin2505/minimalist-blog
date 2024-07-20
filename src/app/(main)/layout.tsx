import NavLayout from "@/layouts/NavLayout"
import React from "react"

function Layout({ children }: { children: React.ReactNode }) {
  return <NavLayout>{children}</NavLayout>
}

export default Layout
