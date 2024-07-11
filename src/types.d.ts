type ThemeType = "dark" | "light"
interface CategoryType {
  name: string
  id: string
  imageSrc: string
}
type CategoriesType = CategoryType[]

export type { ThemeType, CategoriesType, CategoryType }
