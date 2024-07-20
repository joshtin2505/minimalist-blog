import MetricCard from "@/components/dashboard/metrics/MetricCard"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

function MainInfoSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        title="Total Subscribers"
        description="The total number of subscribers to your Blog."
        children={<div className="text-4xl font-bold">12,345</div>}
        sizing="sm:col-span-2"
      />
      <MetricCard
        title="1329"
        description="This Week"
        children={
          <div className="text-xs text-muted-foreground">
            +25% from last week
          </div>
        }
        footerChildren={<Progress value={25} aria-label="25% increase" />}
        reverseHeader
      />
      <MetricCard
        title="5329"
        description="This Month"
        children={
          <div className="text-xs text-muted-foreground">
            +10% from last month
          </div>
        }
        footerChildren={<Progress value={10} aria-label="10% increase" />}
        reverseHeader
      />
      <MetricCard
        title="5043"
        description="Visits"
        children={
          <div className="text-xs text-muted-foreground">5% from last week</div>
        }
        footerChildren={
          <Progress value={5} aria-label="5% Increment in visits" />
        }
        reverseHeader
      />
      <MetricCard
        sizing="sm:col-span-2"
        title="Total Readers"
        description="The total number of readers to your Blog."
        children={<div className="text-4xl font-bold">9,345</div>}
        extraClasses="lg:order-6 xl:order-5 sm:order-6 md:order-5"
      />
      <MetricCard
        title="More data"
        description="See more in analytics..."
        footerChildren={
          <Link
            className="bg-muted p-2 rounded hover:bg-muted/70 transition-colors"
            href="/dashboard/analytics"
          >
            Go to analytics
          </Link>
        }
        extraClasses="lg:order-5 xl:order-6 sm:order-5 md:order-6"
      />
    </div>
  )
}

export default MainInfoSection
