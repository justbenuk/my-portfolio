import z from "zod";

export const createcategorySchema = z.object({
  name: z.string(),
  description: z.string(),
  type: z.string(),
})
