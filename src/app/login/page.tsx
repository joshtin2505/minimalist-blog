import BasicLayout from "@/components/layouts/BasicLayout"
import { LoginForm } from "@/components/login/LoginForm"
import { IconWaveSine } from "@tabler/icons-react"
import Link from "next/link"
import React from "react"

function Page() {
  return (
    <BasicLayout className="relative flex flex-col items-center justify-center">
      <Link
        href="/"
        className="flex absolute top-0 h-14 left-8 items-center gap-2 font-medium"
      >
        <IconWaveSine size={26} />
        <h3 className="text-lg">Minimal Blog</h3>
      </Link>
      <LoginForm />
    </BasicLayout>
  )
}

export default Page
