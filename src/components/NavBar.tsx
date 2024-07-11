"use client"
import Link from "next/link"
import { IconWaveSine } from "@tabler/icons-react"
import { FaGithub } from "react-icons/fa6"
import ThemeButton from "./ThemeButton"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"

function NavBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`sticky top-0 w-full z-50 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav className="w-full h-14 flex items-center px-8 justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2 font-medium">
            <IconWaveSine size={26} />
            <h3 className="text-lg">Minimal Blog</h3>
          </Link>
        </div>
        <div className="flex items-center gap-2">
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
