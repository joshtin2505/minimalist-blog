"use client"
import { createPost } from "@/actions/posts"
import MetricCard from "@/components/dashboard/metrics/MetricCard"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { toast } from "sonner"

function InfoSection() {
  const { push } = useRouter()
  const [isPending, startTransition] = useTransition()
  const handleCreatePost = () => {
    startTransition(() => {
      createPost()
        .then((postId) => {
          push(`/dashboard/posts/${postId}`)
        })
        .catch((error) => {
          toast.error(error.message as string)
        })
    })
  }
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        sizing="sm:col-span-2"
        title="Recent Posts"
        description="Manage your blog posts and view their performance."
        footerChildren={
          <Button
            onClick={handleCreatePost}
            variant="default"
            className="hover:bg-primary/80 gap-1"
            disabled={isPending}
          >
            {isPending ? (
              <>
                Please wait
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              "Create New Post"
            )}
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
