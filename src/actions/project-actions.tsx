'use server'

import { db } from "@/lib/db"
import { updateProjectSchema } from "@/validators/dashboard-validators"
import z from "zod"

export async function fetchProjectById(id: string) {
  const project = await db.project.findFirst({
    where: {
      id
    }
  })

  return project
}

export async function updateProjectAction(data: z.infer<typeof updateProjectSchema>) {
  try {
    const { id, ...updateData } = data

    await db.project.update({
      where: {
        id
      },
      data: updateData
    })

    return { success: true, message: 'Project updated successfully' }
  } catch (error) {
    console.error('Error updating project:', error)
    return { success: false, message: 'Failed to update project' }
  }
}
