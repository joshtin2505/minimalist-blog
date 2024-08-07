"use client"
import { TabsContent } from "@radix-ui/react-tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CustomTable from "@/components/CustomTable"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { File, ListFilter } from "lucide-react"
import useFetchPost from "@/hook/useFetchPost"
import { Skeleton } from "@/components/ui/skeleton"

const recentDrafts = [
  [
    <>
      <div className="font-medium">Olivia Smith</div>
      <div className="hidden text-sm text-muted-foreground md:inline">
        olivia@example.com
      </div>
    </>,
    "Refund",
    "Declined",
    "2023-06-24",
    "$150.00",
  ],
]
function PostsStatusSection() {
  const { isPending, response } = useFetchPost()
  return (
    <>
      {!isPending ? (
        <Tabs defaultValue="recent">
          <div className="flex items-center">
            <TabsList className="mb-2">
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
              <TabsTrigger value="deleted">Deleted</TabsTrigger>
              <TabsTrigger value="programmed">Programmed</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-sm"
                  >
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Fulfilled
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Export</span>
              </Button>
            </div>
          </div>
          <TabsContent value="recent">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Drafts</CardTitle>
                <CardDescription>Recent drafts from your blog.</CardDescription>
              </CardHeader>
              <CardContent>
                <CustomTable
                  theads={["Title", "Category", "Status", "Date", "Author"]}
                  rows={
                    response?.data?.allPosts.map((post) => {
                      return [
                        post.title,
                        post.category.name,
                        <p className="capitalize">
                          {post.status.toLocaleLowerCase()}
                        </p>,
                        post.createdAt ? post.createdAt.toDateString() : "", // Convert Date to string and handle null
                        <>
                          <div className="font-medium">
                            {post.author.name} {post.author.lastname}
                          </div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {post.author.email ? post.author.email : ""}
                          </div>
                        </>,
                      ]
                    }) ?? [[]]
                  }
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ) : (
        <Tabs defaultValue="recent">
          <div className="flex items-center">
            <TabsList className="mb-2">
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
              <TabsTrigger value="deleted">Deleted</TabsTrigger>
              <TabsTrigger value="programmed">Programmed</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Skeleton className="sm:px-10 px-5 inline-block h-7" />
              <Skeleton className="sm:px-10 px-5 inline-block h-7" />
            </div>
          </div>
          <TabsContent value="recent">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>
                  <Skeleton className="px-8 inline-block py-3" />
                </CardTitle>
                <CardDescription>
                  <Skeleton className="px-16 inline-block py-2" />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CustomTable
                  theads={[
                    <Skeleton className="py-3 w-28" />,
                    <Skeleton className="py-3 w-20" />,
                    <Skeleton className="py-3 w-16" />,
                    <Skeleton className="py-3 w-32" />,
                    <Skeleton className="py-3 w-44" />,
                  ]}
                  rows={
                    [1, 2, 3].map((post) => {
                      return [
                        <Skeleton className="py-2 w-full" />,
                        <Skeleton className="py-2 w-20" />,
                        <Skeleton className="py-2 w-16" />,
                        <Skeleton className="py-2 w-32" />,
                        <Skeleton className="py-2 w-full" />,
                      ]
                    }) ?? [[]]
                  }
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </>
  )
}

export default PostsStatusSection
