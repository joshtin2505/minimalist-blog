import { ReactNode } from "react"

function BasicLayout({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <main className={`min-h-dvh ${className}`}>{children}</main>
}

export default BasicLayout
