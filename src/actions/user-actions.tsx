'use server'
import { auth } from "@/lib/auth";
import { userPasswordChangeSchema } from "@/validators/user-validators";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

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
      body: { token }
    })
    revalidatePath('/client/settings')
    return { success: true, message: 'Token Revoked' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to revoke token' }
  }
}

export async function fetchCurrentUser() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect('/login')
  }

  return session.user
}

export async function userChangePassword(data: z.infer<typeof userPasswordChangeSchema>) {
  try {
    const validated = userPasswordChangeSchema.parse(data)

    await auth.api.changePassword({
      body: {
        newPassword: validated.newPassword,
        currentPassword: validated.currentPassword,
        revokeOtherSessions: true
      },
      headers: await headers()
    })

    return { success: true, message: 'Password Changed' }

  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to change password' }
  }
}
