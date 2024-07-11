import { CategoriesType } from "@/types"
import { TabsList, TabsTrigger } from "../ui/tabs"

function Header({ categories }: { categories: CategoriesType }) {
  return (
    <header className="flex w-full justify-between ">
      <h3 className="text-3xl">Categories</h3>

      <TabsList className="">
        {categories.map((category) => {
          const { id, name } = category

          return (
            <TabsTrigger value={id} key={id}>
              {name}
            </TabsTrigger>
          )
        })}
      </TabsList>
    </header>
  )
}

export default Header
