import Aside from "@/sections/dashboard/AsideDashboard"
import HeaderDashboard from "@/sections/dashboard/HeaderDashboard"
import React from "react"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Aside />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <HeaderDashboard />
        {children}
      </div>
    </div>
  )
}

export default Layout
