import Link from "next/link"
import React from "react"

function NavBar() {
  return (
    <header className="sticky">
      <nav>
        <h1 className=" first-letter:text-primary-500 ">
          <Link href="/">MBlog</Link>
        </h1>
      </nav>
    </header>
  )
}

export default NavBar
