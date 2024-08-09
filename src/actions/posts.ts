"use server"
import { auth } from "@/auth"
import { db } from "@/lib/db"
import { PostToDBType } from "@/types"

export async function createPost() {
  try {
    const session = await auth()
    if (!session) {
      throw new Error("Not authenticated")
    }
    const response = await db.posts.create({
      data: {
        author: { connect: { id: session?.user?.id } },
        content: {
          type: "doc",
          content: [
            {
              type: "paragraph",
              attrs: {
                class: null,
                textAlign: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Welcome to our React Block Editor Template built on top of ",
                },
              ],
            },
          ],
        },
      },
      select: { id: true },
    })
    return response.id
  } catch (error) {
    console.log(error)
    throw new Error("Error creating post")
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
    throw new Error("Error updating post")
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
    throw new Error("Error deleting post")
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
    throw new Error("Error publishing post")
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
    throw new Error("Error getting post")
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
    throw new Error("Error getting posts")
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
    throw new Error("Error getting draft posts")
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
    throw new Error("Error getting published posts")
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
    throw new Error("Error getting archived post")
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
    throw new Error("Error getting del posts")
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
    throw new Error("Error getting programet post")
  }
}
