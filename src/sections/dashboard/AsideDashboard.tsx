"use client"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  AudioWaveform,
  Home,
  LineChart,
  Newspaper,
  Settings,
  Users2,
} from "lucide-react"
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import path from "path"
import {
  AnchorHTMLAttributes,
  forwardRef,
  ReactNode,
  useEffect,
  useState,
} from "react"

function Aside() {
  const pathname = usePathname()
  // const [currentPath, setcurrentPath] = useState(pathname)
  // useEffect(() => {
  //   setcurrentPath(currentPath)
  // }, [pathname])
  const linkStyles = {
    currentPathStyles:
      "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
    defaultStyles:
      "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
  }
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="minimalisblog.vercel.app"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <AudioWaveform className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Minimalis Blog</span>
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <DashboardButtonLink {...linkStyles} href="/dashboard">
              <Home className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </DashboardButtonLink>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <DashboardButtonLink
              currentPathStyles="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              defaultStyles="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              href="/dashboard/posts"
            >
              <Newspaper className="h-5 w-5" />
              <span className="sr-only">Posts</span>
            </DashboardButtonLink>
          </TooltipTrigger>
          <TooltipContent side="right">Posts</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <DashboardButtonLink {...linkStyles} href="/dashboard/subscribers">
              <Users2 className="h-5 w-5" />
              <span className="sr-only">Subcribers</span>
            </DashboardButtonLink>
          </TooltipTrigger>
          <TooltipContent side="right">Subcribers</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <DashboardButtonLink {...linkStyles} href="/dashboard/analytics">
              <LineChart className="h-5 w-5" />
              <span className="sr-only">Analytics</span>
            </DashboardButtonLink>
          </TooltipTrigger>
          <TooltipContent side="right">Analytics</TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <DashboardButtonLink {...linkStyles} href="/dashboard/settings">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </DashboardButtonLink>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  )
}

interface DashboardButtonLinkProps
  extends Omit<LinkProps, "href">,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  currentPathStyles: string
  defaultStyles: string
  children: ReactNode
}
const DashboardButtonLink = forwardRef<
  HTMLAnchorElement,
  DashboardButtonLinkProps
>((linkProps, ref) => {
  const { currentPathStyles, children, defaultStyles, ...rest } = linkProps
  const inCurrentPath = usePathname() === rest.href
  return (
    <Link
      ref={ref}
      href={rest.href ?? ""}
      {...rest}
      className={`${inCurrentPath ? currentPathStyles : defaultStyles} `}
    >
      {children}
    </Link>
  )
})

export default Aside
