"use client"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { IconMoon, IconSunHigh } from "@tabler/icons-react"

function ThemeButton() {
  const [theme, setTheme] = useState<"dark" | "light">("light")
  const handleClick = () => setTheme(theme === "light" ? "dark" : "light")

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }, [theme])

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      {theme === "light" ? <IconSunHigh size={24} /> : <IconMoon size={24} />}
    </Button>
  )
}

export default ThemeButton
