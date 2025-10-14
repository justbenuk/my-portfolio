'use server'

import { db } from "@/lib/db";
import { createPostSchema, createProjectSchema, createUserSchema } from "@/validators/dashboard-validators";
import { revalidatePath } from "next/cache";
import z from "zod";
import { hashSync } from "bcrypt-ts-edge";

// User Actions
export async function createUserAction(data: z.infer<typeof createUserSchema>) {
  try {
    const validated = createUserSchema.parse(data);

    // Check if email already exists
    const existingUser = await db.user.findUnique({
      where: { email: validated.email }
    });

    if (existingUser) {
      return { success: false, message: 'Email is already in use' };
    }

    // Hash password
    const hashedPassword = hashSync(validated.password, 10);

    await db.user.create({
      data: {
        name: validated.name,
        email: validated.email,
        password: hashedPassword,
        role: validated.role,
        image: validated.image || null,
      }
    });

    revalidatePath('/dashboard/users');

    return { success: true, message: 'User created successfully' };
  } catch (error) {
    console.error('Create user error:', error);
    return { success: false, message: 'Failed to create user' };
  }
}

// Post Actions
export async function createPostAction(data: z.infer<typeof createPostSchema>) {
  try {
    const validated = createPostSchema.parse(data);

    // Check if slug already exists
    const existingPost = await db.post.findUnique({
      where: { slug: validated.slug }
    });

    if (existingPost) {
      return { success: false, message: 'Slug is already in use' };
    }

    // Parse tags from comma-separated string to array
    const tagsArray = validated.tags
      ? validated.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      : [];

    await db.post.create({
      data: {
        title: validated.title,
        slug: validated.slug,
        excerpt: validated.excerpt,
        content: validated.content,
        category: validated.category,
        tags: tagsArray,
        published: validated.published,
        featured: validated.featured,
        image: validated.image || null,
        imageAlt: validated.imageAlt || null,
        metaTitle: validated.metaTitle || null,
        metaDescription: validated.metaDescription || null,
        publishedAt: validated.published ? new Date() : null,
      }
    });

    revalidatePath('/dashboard/posts');
    revalidatePath('/posts');

    return { success: true, message: 'Post created successfully' };
  } catch (error) {
    console.error('Create post error:', error);
    return { success: false, message: 'Failed to create post' };
  }
}

// Project Actions
export async function createProjectAction(data: z.infer<typeof createProjectSchema>) {
  try {
    const validated = createProjectSchema.parse(data);

    // Check if slug already exists
    const existingProject = await db.project.findUnique({
      where: { slug: validated.slug }
    });

    if (existingProject) {
      return { success: false, message: 'Slug is already in use' };
    }

    // Parse tags from comma-separated string to array
    const tagsArray = validated.tags
      ? validated.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      : [];

    await db.project.create({
      data: {
        title: validated.title,
        slug: validated.slug,
        description: validated.description,
        fullDescription: validated.fullDescription,
        category: validated.category,
        tags: tagsArray,
        published: validated.published,
        featured: validated.featured,
        image: validated.image || null,
        imageAlt: validated.imageAlt || null,
        liveUrl: validated.liveUrl || null,
        githubUrl: validated.githubUrl || null,
        client: validated.client || null,
        duration: validated.duration || null,
        completedAt: validated.published ? new Date() : null,
      }
    });

    revalidatePath('/dashboard/projects');
    revalidatePath('/work');

    return { success: true, message: 'Project created successfully' };
  } catch (error) {
    console.error('Create project error:', error);
    return { success: false, message: 'Failed to create project' };
  }
}
