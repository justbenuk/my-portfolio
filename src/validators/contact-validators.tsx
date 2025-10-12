import z from "zod";

export const contyactFormSchema = z.object({
  name: z.string().min(1, 'Please provide your name'),
  email: z.string().email('Please provide your email'),
  subject: z.string().min(1, 'Whats your message about'),
  message: z.string().min(1, 'Your message'),

})
