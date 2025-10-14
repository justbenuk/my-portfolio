'use server'

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { updateProfileSchema } from "@/validators/profile-validators";
import { revalidatePath } from "next/cache";
import z from "zod";

export async function updateProfileAction(data: z.infer<typeof updateProfileSchema>) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return { success: false, message: 'Unauthorized' };
    }

    const validated = updateProfileSchema.parse(data);

    // Check if email is being changed and if it's already taken by another user
    if (validated.email !== session.user.email) {
      const existingUser = await db.user.findUnique({
        where: { email: validated.email }
      });

      if (existingUser && existingUser.id !== session.user.id) {
        return { success: false, message: 'Email is already in use' };
      }
    }

    await db.user.update({
      where: { id: session.user.id },
      data: {
        name: validated.name,
        email: validated.email,
        image: validated.image || null,
      }
    });

    revalidatePath('/portal/profile');

    return { success: true, message: 'Profile updated successfully' };
  } catch (error) {
    console.error('Profile update error:', error);
    return { success: false, message: 'Failed to update profile' };
  }
}
