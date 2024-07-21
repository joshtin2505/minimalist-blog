import BasicLayout from "@/layouts/BasicLayout"
import { ReactNode } from "react"

function Layout({ children }: { children: ReactNode }) {
  return (
    <BasicLayout
      className={"relative flex flex-col items-center justify-center"}
    >
      {children}
    </BasicLayout>
  )
}

export default Layout
