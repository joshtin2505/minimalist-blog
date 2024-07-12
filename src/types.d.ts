type ThemeType = "dark" | "light"
interface CategoryType {
  name: string
  value: string
  imageSrc: string
}
type CategoriesType = CategoryType[]

export type { ThemeType, CategoriesType, CategoryType }
