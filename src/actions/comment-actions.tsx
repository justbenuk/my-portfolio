'use server'

import { db } from "@/lib/db";
import { createCommentSchema } from "@/validators/comment-validators";
import { revalidatePath } from "next/cache";
import z from "zod";

export async function createCommentAction(data: z.infer<typeof createCommentSchema>) {
  try {
    const validated = createCommentSchema.parse(data);

    // Honeypot check - if filled, it's likely a bot
    if (validated.honeypot && validated.honeypot.trim() !== '') {
      // Silently fail for bots
      return { success: true, message: 'Comment submitted successfully and is awaiting approval' };
    }

    // Additional spam checks
    const content = validated.content.toLowerCase();
    const spamKeywords = ['viagra', 'cialis', 'porn', 'casino', 'lottery', 'prize', 'click here', 'buy now'];
    const hasSpam = spamKeywords.some(keyword => content.includes(keyword));

    if (hasSpam) {
      return { success: false, message: 'Your comment contains prohibited content' };
    }

    // Check if post exists
    const post = await db.post.findUnique({
      where: { id: validated.postId }
    });

    if (!post) {
      return { success: false, message: 'Post not found' };
    }

    // Create comment (unapproved by default)
    await db.comment.create({
      data: {
        postId: validated.postId,
        author: validated.author,
        email: validated.email,
        content: validated.content,
        approved: false,
      }
    });

    revalidatePath(`/posts/${post.slug}`);

    return { success: true, message: 'Comment submitted successfully and is awaiting approval' };
  } catch (error) {
    console.error('Create comment error:', error);
    return { success: false, message: 'Failed to submit comment' };
  }
}

export async function approveCommentAction(commentId: string) {
  try {
    const comment = await db.comment.update({
      where: { id: commentId },
      data: { approved: true }
    });

    const post = await db.post.findUnique({
      where: { id: comment.postId },
      select: { slug: true }
    });

    if (post) {
      revalidatePath(`/posts/${post.slug}`);
    }
    revalidatePath('/dashboard/comments');

    return { success: true, message: 'Comment approved successfully' };
  } catch (error) {
    console.error('Approve comment error:', error);
    return { success: false, message: 'Failed to approve comment' };
  }
}

export async function deleteCommentAction(commentId: string) {
  try {
    const comment = await db.comment.findUnique({
      where: { id: commentId },
      include: { post: { select: { slug: true } } }
    });

    await db.comment.delete({
      where: { id: commentId }
    });

    if (comment?.post) {
      revalidatePath(`/posts/${comment.post.slug}`);
    }
    revalidatePath('/dashboard/comments');

    return { success: true, message: 'Comment deleted successfully' };
  } catch (error) {
    console.error('Delete comment error:', error);
    return { success: false, message: 'Failed to delete comment' };
  }
}
