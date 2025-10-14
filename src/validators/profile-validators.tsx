import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  image: z.string().url({ message: "Invalid image URL" }).optional().or(z.literal('')),
});
