'use server'
import { db } from "@/lib/db"
import { createcategorySchema } from "@/validators/category-validators"
import z from "zod"
import slugify from 'slugify'
import { revalidatePath } from "next/cache"
import { isAdminAction } from "./auth-actions"

export async function fetchAllCategories() {
  try {
    const categories = await db.category.findMany()
    return categories
  } catch (error) {
    console.error(error)
  }
}
export async function updateCategoryAction(data: z.infer<typeof createcategorySchema>, id: string) {
  await isAdminAction()
  try {
    const validated = createcategorySchema.parse(data)
    await db.category.update({
      where: {
        id
      },
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

export async function createCategoryAction(data: z.infer<typeof createcategorySchema>) {
  await isAdminAction()
  try {
    const validated = createcategorySchema.parse(data)

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

export async function fetchCategoryById(id: string) {
  const category = await db.category.findFirst({
    where: {
      id
    }
  })
  return category
}

export async function deleteCateforyById(categoryId: string) {
  await isAdminAction()
  await db.category.delete({
    where: {
      id: categoryId
    }
  })
  revalidatePath('/dashboard/categories')
}

export async function fetchAllCategorysByType(type: string) {
  const categories = await db.category.findMany({
    where: {
      type: type
    }
  })
  return categories
}
