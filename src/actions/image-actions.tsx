'use server'

import { UTApi } from "uploadthing/server"

export async function removeImageById(imageUrl: string) {
  if (!imageUrl) return

  try {
    //start the process
    const utapi = new UTApi()

    //get the image key from the url
    const imageKey = imageUrl.substring(imageUrl.lastIndexOf("/") + 1)

    //remove image from upload thing 
    await utapi.deleteFiles(imageKey)
  } catch (error) {
    console.error(error)
  }
}
