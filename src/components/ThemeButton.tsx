"use client"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { IconMoon, IconSunHigh } from "@tabler/icons-react"
import { getItem, setItem } from "@/utils/LocalStorage"
import { ThemeType } from "@/types.d"

function ThemeButton() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = getItem("theme") as ThemeType
    return savedTheme || "light"
  })
  const handleClick = () => setTheme(theme === "light" ? "dark" : "light")

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark")
      setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      setItem("theme", "dark")
    }
  }, [theme])

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      {theme === "light" ? <IconSunHigh size={24} /> : <IconMoon size={24} />}
    </Button>
  )
}

export default ThemeButton
