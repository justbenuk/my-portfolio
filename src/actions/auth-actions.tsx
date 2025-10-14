'use server'

import { loginUserSchema, registerUserSchema } from "@/validators/auth-validators";
import z from "zod";
import { compareSync, hashSync } from "bcrypt-ts-edge"
import { db } from "@/lib/db";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function registerUserAction(data: z.infer<typeof registerUserSchema>) {
  try {
    const validated = registerUserSchema.parse(data)
    const hashPassword = hashSync(validated.password, 10)
    await db.user.create({
      data: {
        name: validated.name,
        email: validated.email,
        password: hashPassword,
        role: "user"
      }
    })

    redirect('/login')
  } catch (error) {
    if (isRedirectError(error)) throw error
    return { success: false, message: 'Registration Failed' }
  }
}

export async function loginUserAction(data: z.infer<typeof loginUserSchema>) {

  const validated = loginUserSchema.parse(data)

  const user = await db.user.findUnique({
    where: {
      email: validated.email
    }
  })

  if (!user) {
    return { success: false, message: 'Invalid Credentials' }
  }

  const isValid = compareSync(validated.password, user.password)
  if (!isValid) {
    return { success: false, message: 'Invalid Credentials' }
  }

  await signIn('credentials', {
    redirect: true,
    email: validated.email,
    password: validated.password
  })
  revalidatePath('/login')
  return { success: true, message: 'User logged in' }

}

export async function logoutUserAction() {
  await signOut()
}

export async function isLoggedInAction() {
  const session = await auth()
  if (!session?.user) redirect('/login')
}

export async function isAdminAction() {
  const session = await auth()
  if (!session?.user) redirect('/login')
  if (session.user.role !== 'admin') redirect('/not-authorised')
}
