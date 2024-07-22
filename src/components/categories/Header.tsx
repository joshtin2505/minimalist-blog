import { CategoryPureType } from "@/types"
import { TabsList, TabsTrigger } from "../ui/tabs"

function Header({ categories = [] }: { categories: CategoryPureType[] }) {
  if (categories.length === 0) return null
  return (
    <header className="flex w-full justify-between ">
      <h3 className="text-3xl">Categories</h3>

      <TabsList className="">
        {categories.map((category) => {
          const { name } = category

          return (
            <TabsTrigger value={name} key={name}>
              {name}
            </TabsTrigger>
          )
        })}
      </TabsList>
    </header>
  )
}

export default Header
