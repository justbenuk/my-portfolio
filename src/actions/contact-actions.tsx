'use server'

import ContactFormTemplate from "@/emails/contact-form-template";
import { contyactFormSchema } from "@/validators/contact-validators";
import { Resend } from "resend";
import z from "zod";


export async function sendContactMessageAction(formData: z.infer<typeof contyactFormSchema>) {
  const resend = new Resend(process.env.RESEND_API);
  const response = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['justbenuk@gmail.com'],
    subject: 'Hello world',
    react: ContactFormTemplate(formData)
  });

  if (response.error) {
    return { success: false, message: 'Failed to send message' }
  } else {
    return { success: true, message: 'Message Sent' }
  }
}
