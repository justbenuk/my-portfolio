"use client";

import { createCommentAction } from "@/actions/comment-actions";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createCommentSchema } from "@/validators/comment-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare, User, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";

interface CommentFormProps {
  postId: string;
}

export default function CommentForm({ postId }: CommentFormProps) {
  const form = useForm({
    resolver: zodResolver(createCommentSchema),
    defaultValues: {
      postId,
      author: '',
      email: '',
      content: '',
      honeypot: '', // Spam trap
    }
  });

  async function handleForm(values: z.infer<typeof createCommentSchema>) {
    const { success, message } = await createCommentAction(values);

    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
      form.reset({
        postId,
        author: '',
        email: '',
        content: '',
        honeypot: '',
      });
    }
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-5 h-5 text-teal-400" />
        <h3 className="text-xl font-bold text-white">Leave a Comment</h3>
      </div>

      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(handleForm)}>
          <FieldGroup>
            {/* Name */}
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Name *</FormLabel>
                  <FormControl>
                    <Field>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="w-4 h-4 text-slate-500" />
                        </div>
                        <Input
                          {...field}
                          placeholder="Your name"
                          className="h-10 pl-10 bg-slate-800 border-slate-700 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-lg"
                        />
                      </div>
                    </Field>
                  </FormControl>
                  <FieldError>
                    <FormMessage />
                  </FieldError>
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Email *</FormLabel>
                  <FormControl>
                    <Field>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="w-4 h-4 text-slate-500" />
                        </div>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your@email.com"
                          className="h-10 pl-10 bg-slate-800 border-slate-700 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-lg"
                        />
                      </div>
                    </Field>
                  </FormControl>
                  <FieldError>
                    <FormMessage />
                  </FieldError>
                </FormItem>
              )}
            />

            {/* Comment */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Comment *</FormLabel>
                  <FormControl>
                    <Field>
                      <Textarea
                        {...field}
                        placeholder="Share your thoughts..."
                        rows={4}
                        className="bg-slate-800 border-slate-700 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-lg resize-none"
                      />
                    </Field>
                  </FormControl>
                  <FieldError>
                    <FormMessage />
                  </FieldError>
                </FormItem>
              )}
            />

            {/* Honeypot field - hidden from users, catches bots */}
            <FormField
              control={form.control}
              name="honeypot"
              render={({ field }) => (
                <FormItem className="hidden">
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="text-sm text-slate-400 bg-slate-800/50 p-3 rounded-lg">
              Your comment will be reviewed before being published.
            </div>

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="mr-2 w-4 h-4" />
              <span>{form.formState.isSubmitting ? "Submitting..." : "Post Comment"}</span>
            </Button>
          </FieldGroup>
        </form>
      </Form>
    </div>
  );
}
