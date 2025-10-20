'use server'

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { isAdminAction } from "./auth-actions";

export async function fetchAllPosts(take?: number) {
  try {

    //fetch all the posts = can limit if on the front page
    const posts = await db.post.findMany({
      orderBy: { createdAt: "desc" },
      take,
      select: {
        id: true,
        title: true,
        slug: true,
        category: true,
        published: true,
        featured: true,
        views: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return posts
  } catch (error) {
    console.error(error)
  }
}
export async function fetchSinglePostBySlug(slug: string) {
  try {
    const post = await db.post.findFirst({
      where: {
        slug
      }
    })

    if (!post) {
      return null
    }

    await db.post.update({
      where: {
        id: post.id
      },
      data: {
        views: + 1
      }
    })

    return post
  } catch (error) {
    console.error(error)
  }
}

export async function fetchSinglePostById({ id }: { id: string }) {
  try {
    const post = await db.post.findFirst({
      where: {
        id
      }
    })

    if (!post) {
      return null
    }

    return post
  } catch (error) {
    console.error(error)
  }
}

export async function deletePostById(id: string) {
  await isAdminAction()
  try {
    await db.post.delete({
      where: { id }
    })
    revalidatePath('/dashboard/posts')
    return { success: true, message: 'Post deleted' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to delete post' }
  }
}
