import z from "zod";

export const contactSiteSchema = z.object({
  name: z.string().min(1, 'Please provide your name'),
  email: z.string().email('Please provide your email address'),
  message: z.string().min(1, 'What\'s your message')
})
