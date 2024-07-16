type ThemeType = "dark" | "light"
type IdType = `${string}-${string}-${string}-${string}-${string}`
type EmailType = `${string}@${string}.${string}`
interface CategoryType {
  name: string
  imagesrc: string
}
type CategoriesType = CategoryType[]

type LoggedUserType = {
  id: IdType
  name: string
  lastname: string
  email: string
  username: string
}
type UserType = {
  id: IdType
  name: string
  lastname: string
  email: string
  username: string
  password: string
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
  UserType,
}
