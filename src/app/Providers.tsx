import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  )
}

export default Providers
