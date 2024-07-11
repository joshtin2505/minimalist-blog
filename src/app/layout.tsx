import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Providers from "./Providers"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900", "1000", "200", "600", "800"],
})

export const metadata: Metadata = {
  title: "Minimal Blog - by Joshtin.Dev",
  description: "Minimal blog starter template",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="/theme-script.js" async></script>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </head>
      <body className={`${nunito.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
