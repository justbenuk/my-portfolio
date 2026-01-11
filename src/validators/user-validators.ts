import z from "zod";

export const userPasswordChangeSchema = z.object({
  currentPassword: z.string().min(1, 'You must provide your current password'),
  newPassword: z.string().min(8, 'Password must be 8 characters'),
  confirmPassword: z.string().min(8, 'Password must be 8 characters')
}).refine((data) => data.newPassword === data.confirmPassword, {
  path: ['password'],
  message: 'Passwords dont match'
})
