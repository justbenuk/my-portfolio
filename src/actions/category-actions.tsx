'use server'

import { db } from "@/lib/db"
import { createcategorySchema } from "@/validators/category-validators"
import z from "zod"
import slugify from 'slugify'
import { revalidatePath } from "next/cache"

export async function fetchAllCategories() {
  try {
    const categories = await db.category.findMany()
    return categories
  } catch (error) {
    console.error(error)
  }
}

export async function createCategoryAction(data: z.infer<typeof createcategorySchema>) {
  try {
    const validated = createcategorySchema.parse(data)
    console.log(data)

    await db.category.create({
      data: {
        name: validated.name,
        slug: slugify(validated.name, {
          lower: true
        }),
        description: validated.description,
        type: validated.type
      }
    })
    revalidatePath('/dashboard/categories')
    return { success: true, message: 'Category Added' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to add category' }
  }
}
