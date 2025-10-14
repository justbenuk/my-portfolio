"use client";

import { createUserAction } from "@/actions/dashboard-actions";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createUserSchema } from "@/validators/dashboard-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Lock, Shield, Image, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";

export default function NewUserForm() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'user' as 'user' | 'admin',
      image: '',
    }
  });

  async function handleForm(values: z.infer<typeof createUserSchema>) {
    const { success, message } = await createUserAction(values);

    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
      router.push('/dashboard/users');
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(handleForm)}>
        <FieldGroup>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Name</FormLabel>
                <FormControl>
                  <Field>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="w-4 h-4 text-slate-500" />
                      </div>
                      <Input
                        {...field}
                        placeholder="John Doe"
                        className="h-10 pl-10 bg-slate-800 border-slate-700 focus:border-purple-500 text-white placeholder:text-slate-500 rounded-lg"
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

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Email</FormLabel>
                <FormControl>
                  <Field>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-4 h-4 text-slate-500" />
                      </div>
                      <Input
                        {...field}
                        type="email"
                        placeholder="john@example.com"
                        className="h-10 pl-10 bg-slate-800 border-slate-700 focus:border-purple-500 text-white placeholder:text-slate-500 rounded-lg"
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Password</FormLabel>
                <FormControl>
                  <Field>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="w-4 h-4 text-slate-500" />
                      </div>
                      <Input
                        {...field}
                        type="password"
                        placeholder="••••••••"
                        className="h-10 pl-10 bg-slate-800 border-slate-700 focus:border-purple-500 text-white placeholder:text-slate-500 rounded-lg"
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

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Role</FormLabel>
                <FormControl>
                  <Field>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Shield className="w-4 h-4 text-slate-500" />
                      </div>
                      <select
                        {...field}
                        className="h-10 w-full pl-10 bg-slate-800 border border-slate-700 focus:border-purple-500 text-white rounded-lg outline-none"
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </Field>
                </FormControl>
                <FieldError>
                  <FormMessage />
                </FieldError>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Profile Image URL (Optional)</FormLabel>
                <FormControl>
                  <Field>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Image className="w-4 h-4 text-slate-500" />
                      </div>
                      <Input
                        {...field}
                        placeholder="https://example.com/avatar.jpg"
                        className="h-10 pl-10 bg-slate-800 border-slate-700 focus:border-purple-500 text-white placeholder:text-slate-500 rounded-lg"
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

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="flex-1 h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="mr-2 w-4 h-4" />
              <span>{form.formState.isSubmitting ? "Creating..." : "Create User"}</span>
            </Button>
            <Button
              type="button"
              onClick={() => router.push('/dashboard/users')}
              className="h-10 px-6 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
            >
              Cancel
            </Button>
          </div>
        </FieldGroup>
      </form>
    </Form>
  );
}
