import { z } from "zod";

// User validators
export const createUserSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  role: z.enum(["user", "admin"], { message: "Role must be either user or admin" }),
  image: z.string().url({ message: "Invalid image URL" }).optional().or(z.literal('')),
});

// Post validators
export const createPostSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters" }),
  excerpt: z.string().min(10, { message: "Excerpt must be at least 10 characters" }),
  content: z.string().min(50, { message: "Content must be at least 50 characters" }),
  category: z.string().min(2, { message: "Category is required" }),
  tags: z.string().optional(),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  image: z.string().url({ message: "Invalid image URL" }).optional().or(z.literal('')),
  imageAlt: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

// Project validators
export const createProjectSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  fullDescription: z.string().min(50, { message: "Full description must be at least 50 characters" }),
  category: z.string().min(2, { message: "Category is required" }),
  tags: z.string().optional(),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  image: z.string().url({ message: "Invalid image URL" }).optional().or(z.literal('')),
  imageAlt: z.string().optional(),
  liveUrl: z.string().url({ message: "Invalid live URL" }).optional().or(z.literal('')),
  githubUrl: z.string().url({ message: "Invalid GitHub URL" }).optional().or(z.literal('')),
  client: z.string().optional(),
  duration: z.string().optional(),
});
