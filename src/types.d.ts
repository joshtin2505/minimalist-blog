type ThemeType = "dark" | "light"
interface CategoryType {
  name: string
  value: string
  imageSrc: string
}
type CategoriesType = CategoryType[]

export enum USER_STATUS {
  LOGGED = "LOGGED",
  PASSWORD_NOT_MATCH = "PASSWORD_NOT_MATCH",
  MAIL_NOT_FOUND = "MAIL_NOT_FOUND",
  INTERNAL_ERROR = "INTERNAL_ERROR",
}

export type { ThemeType, CategoriesType, CategoryType }
