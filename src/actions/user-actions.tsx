'use server'
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function fetchUsersCurrentSessions() {
  try {
    const sessions = await auth.api.listSessions({
      headers: await headers()
    })
    return sessions
  } catch (error) {
    console.error(error)
  }
}

export async function revokeUserSessionByToken(token: string) {
  try {
    await auth.api.revokeSession({
      headers: await headers(),
      body: {token}
    })
    revalidatePath('/client/settings')
    return {success: true, message: 'Token Revoked'}
  } catch (error) {
    console.error(error)
    return {success: false, message: 'Failed to revoke token'}
  }
}

