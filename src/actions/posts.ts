"use server"
import { db } from "@/lib/db"
import { IdType, PostToDBType } from "@/types"

export async function createPost(post: PostToDBType) {
  try {
    const response = await db.posts.create({
      data: {
        ...post,
        readingTimeMinutes: post.readingTimeMinutes ?? 0,
      },
    })
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}

export async function updatePost(post: PostToDBType) {
  const { id, ...rest } = post
  try {
    const response = await db.posts.update({
      where: { id },
      data: {
        ...rest,
      },
    })
    return response
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}

export async function deletePost(postId: string) {
  try {
    const response = await db.posts.delete({
      where: { id: postId },
    })
    return response
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}

export async function publishPost(postId: string) {
  try {
    const response = await db.posts.update({
      where: { id: postId },
      data: {
        status: "PUBLISHED",
      },
    })
    return response
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}

export async function getPost(postId: string) {
  try {
    const response = await db.posts.findUnique({
      where: { id: postId },
      include: {
        category: true,
        author: true,
      },
    })
    return response
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}

export async function getPosts() {
  try {
    const response = await db.posts.findMany({
      include: {
        category: true,
        author: true,
      },
    })
    return response
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}

export async function getDrafts() {
  try {
    const response = await db.posts.findMany({
      where: { status: "DRAFT" },
      include: {
        category: true,
        author: true,
      },
    })
    return response
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}

export async function getPublishedPosts() {
  try {
    const response = await db.posts.findMany({
      where: { status: "PUBLISHED" },
      include: {
        category: true,
        author: true,
      },
    })
    return response
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}

export async function getArchivedPosts() {
  try {
    const response = await db.posts.findMany({
      where: { status: "ARCHIVED" },
      include: {
        category: true,
        author: true,
      },
    })
    return response
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}

export async function getDeletedPosts() {
  try {
    const response = await db.posts.findMany({
      where: { status: "DELETED" },
      include: {
        category: true,
        author: true,
      },
    })
    return response
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}

export async function getProgrammedPosts() {
  try {
    const response = await db.posts.findMany({
      where: { status: "PROGRAMMED" },
      include: {
        category: true,
        author: true,
      },
    })
    return response
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}
