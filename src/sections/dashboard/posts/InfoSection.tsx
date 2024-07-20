"use client"
import MetricCard from "@/components/dashboard/metrics/MetricCard"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"

function InfoSection() {
  const { push } = useRouter()

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        sizing="sm:col-span-2"
        title="Recent Posts"
        description="Manage your blog posts and view their performance."
        footerChildren={
          <Button onClick={() => push("/dashboard/posts/new")}>
            Create New Order
          </Button>
        }
      />
      <MetricCard
        reverseHeader
        title="$1,329"
        description="This Week"
        footerChildren={<Progress value={25} aria-label="25% increase" />}
        children={
          <div className="text-xs text-muted-foreground">
            +25% from last week
          </div>
        }
      />
      <MetricCard
        reverseHeader
        title="$5,329"
        description="This Month"
        footerChildren={<Progress value={12} aria-label="12% increase" />}
        children={
          <div className="text-xs text-muted-foreground">
            +10% from last month
          </div>
        }
      />
    </div>
  )
}

export default InfoSection
