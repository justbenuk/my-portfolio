'use server'

import { auth } from "@/lib/auth"
import { loginFormSchema, registerFormSchema } from "@/validators/auth-validators"
import { isRedirectError } from "next/dist/client/components/redirect-error"
import z from "zod"

export async function LoginUsserAction(data: z.infer<typeof loginFormSchema>) {
  try {

    const validated = loginFormSchema.parse(data)

    await auth.api.signInEmail({
      body: {
        email: validated.email,
        password: validated.password,
        callbackURL: "/client"
      }
    })

    return { success: true, message: 'User signed in' }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: 'Invalid Credential\'s' }
  }
}

export async function RegisterUsserAction(data: z.infer<typeof registerFormSchema>) {
  try {

    const validated = registerFormSchema.parse(data)

    await auth.api.signUpEmail({
      body: {
        name: validated.name,
        email: validated.email,
        password: validated.password,
        callbackURL: "/client"
      }
    })

    return { success: true, message: 'User signed in' }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: 'Invalid Credential\'s' }
  }
}
