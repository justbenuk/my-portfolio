"use client";

import { registerUserAction } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerUserSchema } from "@/validators/auth-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";

export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  async function handleForm(values: z.infer<typeof registerUserSchema>) {
    const { success, message } = await registerUserAction(values)

    if (!success) {
      toast.error(message)
    } else {
      toast.success('User Registered')
      form.reset()
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
                <FormControl>
                  <Field>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-slate-400" />
                      </div>
                      <Input
                        {...field}
                        placeholder="Full name"
                        className="h-12 pl-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-xl transition-all duration-300"
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
                <FormControl>
                  <Field>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-slate-400" />
                      </div>
                      <Input
                        {...field}
                        placeholder="Email address"
                        className="h-12 pl-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-xl transition-all duration-300"
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
                <FormControl>
                  <Field>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="w-5 h-5 text-slate-400" />
                      </div>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password"
                        className="h-12 pl-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-xl transition-all duration-300"
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
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Field>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="w-5 h-5 text-slate-400" />
                      </div>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Confirm password"
                        className="h-12 pl-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-xl transition-all duration-300"
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
          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 hover:scale-[1.02] group"
          >
            <span>Create Account</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </FieldGroup>
      </form>
    </Form>
  );
}
