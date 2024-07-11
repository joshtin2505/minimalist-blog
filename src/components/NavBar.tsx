import Link from "next/link"
import { IconWaveSine } from "@tabler/icons-react"
import { FaGithub } from "react-icons/fa6"
import ThemeButton from "./ThemeButton"
import { Button } from "./ui/button"

function NavBar() {
  return (
    <header className="sticky  w-full">
      <nav className="w-full h-14 flex items-center px-8 justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2 font-medium">
            <IconWaveSine size={26} />
            <h3 className="text-lg ">Minimal Blog</h3>
          </Link>
        </div>
        <div className="flex items-center gap-2 ">
          <ul className="px-4">
            <Link href="/blog">
              <Button variant="link">Blog</Button>
            </Link>
            <Link href="/categories">
              <Button variant="link">Categories</Button>
            </Link>
          </ul>
          <Link
            rel="noreferrer"
            target="_blank"
            href="https://github.com/joshtin2505"
          >
            <FaGithub size={24} />
          </Link>
          <ThemeButton />
        </div>
      </nav>
    </header>
  )
}

export default NavBar
