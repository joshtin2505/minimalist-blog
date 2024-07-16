"use client"
import React from "react"
import { Button } from "./ui/button"
import { signOut } from "next-auth/react"

function Logout() {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/login",
    })
  }
  return <Button onClick={handleLogout}>Logout</Button>
}

export default Logout
