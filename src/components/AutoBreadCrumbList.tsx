import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"
import Link from "next/link"

function AutoBreadCrumbList({ uri }: { uri: string }) {
  let hrefCrecent = ""
  const uriParts = uri
    .split("/")
    .filter(Boolean)
    .map((part) => {
      hrefCrecent += `/${part}`
      return {
        name: part.replace(/-/g, " ").replace(/_/g, " "),
        href: hrefCrecent,
      }
    })
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {uriParts.map((part, index, array) => {
          const isLastIndex = index + 1 === array.length
          if (isLastIndex) {
            return (
              <BreadcrumbItem key={part.href}>
                <BreadcrumbPage className="capitalize text-lg">
                  {part.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            )
          }
          return (
            <>
              <BreadcrumbItem key={part.href}>
                <BreadcrumbLink asChild>
                  <Link href={part.href} className="capitalize text-lg">
                    {part.name}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default AutoBreadCrumbList
