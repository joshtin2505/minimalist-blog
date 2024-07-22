import { $Enums } from "@prisma/client"

type ThemeType = "dark" | "light"
type IdType = `${string}-${string}-${string}-${string}-${string}`
type EmailType = `${string}@${string}.${string}`
type CategoryPureType = {
  name: string
  imagesrc: string
  id: string
}

interface CategoryResDBType extends CategoryPureType {
  createdAt: Date
  updatedAt: Date
  createdById: string
}

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

interface AuthorDBType extends UserType {
  emailVerified: Boolean | null
  image: string | null
  createdAt: Date
  updatedAt: Date
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

export enum PostStatus {
  DRAFT,
  PUBLISHED,
  ARCHIVED,
  DELETED,
  PROGRAMMED,
}

type PostPureType = {
  id?: string
  title: string
  content: string
  html: string
  markdown: string
  createdAt?: Date
  updatedAt?: Date
  publishedAt?: Date
  readingTimeMinutes?: number
  status: $Enums.PostStatus
  tags?: string[] | []
}

interface PostResType extends PostPureType {
  category: CategoryResDBType
  author: Author
  publishedAt: Date | null
}

interface PostToDBType extends PostPureType {
  authorId: string
  categoryId: string
  publishedAt: Date | null
}

export type {
  ThemeType,
  LoggedUserType,
  ReturnLoginType,
  UserType,
  IdType,
  PostPureType,
  PostResType,
  PostToDBType,
  CategoryPureType,
}
