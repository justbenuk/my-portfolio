'use server'

import { db } from "@/lib/db";

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

export async function fetchSinglePost({ id }: { id: string }) {
  try {
    const post = await db.post.findFirst({
      where: {
        id
      }
    })

    return post
  } catch (error) {
    console.error(error)
  }
}
