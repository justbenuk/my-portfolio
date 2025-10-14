import z from "zod";

export const registerUserSchema = z.object({
  name: z.string().min(3, 'Must be 3 characters or more'),
  email: z.string().email('Must provide a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Password must be at least 6 characters')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords don&apos;t match',
  path: ['confirmPassword']
})

export const loginUserSchema = z.object({
  email: z.string().email('Please provide your email address'),
  password: z.string().min(1, 'Please provide your password')
})
