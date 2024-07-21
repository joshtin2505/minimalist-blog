"use server"
import { db } from "@/lib/db"
import { PostType } from "@/types"

export async function createPost(post: PostType) {
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

export async function updatePost(post: PostType) {
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
    })
    return response
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}
