import { z } from "zod";

export const createCommentSchema = z.object({
  postId: z.string().min(1, { message: "Post ID is required" }),
  author: z.string().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().email({ message: "Invalid email address" }),
  content: z.string().min(10, { message: "Comment must be at least 10 characters" }).max(1000, { message: "Comment must not exceed 1000 characters" }),
  honeypot: z.string().optional(), // Spam trap field
});
