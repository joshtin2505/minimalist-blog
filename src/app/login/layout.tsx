import BasicLayout from "@/layouts/BasicLayout"
import { ReactNode } from "react"

function Layout({
  children,
  className = "relative flex flex-col items-center justify-center",
}: {
  children: ReactNode
  className?: string
}) {
  return <BasicLayout className={className}>{children}</BasicLayout>
}

export default Layout
