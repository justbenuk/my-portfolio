import z from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(1, 'Please provide your name'),
  email: z.string().email('Please provide your email'),
  password: z.string().min(8, 'Password must be 8 characters or more'),
  confirmPassword: z.string().min(8, 'Password must be 8 characters or more')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['password', 'confirmPassword']
})

export const loginFormSchema = z.object({
  email: z.string().email('Please enter your email'),
  password: z.string().min(8, 'Password enter your password'),
})
