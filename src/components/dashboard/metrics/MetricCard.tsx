import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function MetricCard({
  footerChildren,
  title,
  description,
  children,
  sizing = "sm:col-span-1",
  reverseHeader = false,
  extraClasses = "",
}: {
  footerChildren?: React.ReactNode
  title: string
  description: string
  children?: React.ReactNode
  sizing?:
    | "sm:col-span-2"
    | "sm:col-span-1"
    | "sm:col-span-3"
    | "sm:col-span-4"
    | "sm:col-span-5"
    | "sm:col-span-6"
    | "sm:col-span-7"
    | "sm:col-span-8"
    | "sm:col-span-9"
    | "sm:col-span-10"
    | "sm:col-span-11"
    | "sm:col-span-12"
  reverseHeader?: boolean
  extraClasses?: string
}) {
  return (
    <Card
      className={`${sizing} ${extraClasses}`}
      x-chunk="dashboard-05-chunk-0"
    >
      <CardHeader className="pb-2">
        {reverseHeader ? (
          <>
            <CardDescription>{description}</CardDescription>
            <CardTitle className="text-4xl">{title}</CardTitle>
          </>
        ) : (
          <>
            <CardTitle className="text-4xl">{title}</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              {description}
            </CardDescription>
          </>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{footerChildren}</CardFooter>
    </Card>
  )
}

export default MetricCard
