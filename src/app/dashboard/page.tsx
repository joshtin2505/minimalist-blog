import ProtectedRoutes from "@/components/ProtectedRoutes"
import React from "react"

function Page() {
  return (
    <ProtectedRoutes>
      <div>Page</div>
    </ProtectedRoutes>
  )
}

export default Page
