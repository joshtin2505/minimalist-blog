type ThemeType = "dark" | "light"
interface CategoryType {
  name: string
  value: string
  imagesrc: string
}
type CategoriesType = CategoryType[]

type IdType = `${string}-${string}-${string}-${string}-${string}`
type EmailType = `${string}@${string}.${string}`
type LoggedUserType = {
  id: IdType
  name: string
  lastname: string
  email: string
  username: string
}

type ReturnLoginType =
  | {
      status: USER_STATUS.LOGGED
      user: {
        id: IdType
        email: EmailType
        name: string
        lastname: string
        username: string
      }
    }
  | {
      status: Exclude<USER_STATUS, USER_STATUS.LOGGED>
    }
export enum USER_STATUS {
  LOGGED = "LOGGED",
  PASSWORD_NOT_MATCH = "PASSWORD_NOT_MATCH",
  MAIL_NOT_FOUND = "MAIL_NOT_FOUND",
  INTERNAL_ERROR = "INTERNAL_ERROR",
}

export type {
  ThemeType,
  CategoriesType,
  CategoryType,
  LoggedUserType,
  ReturnLoginType,
}
