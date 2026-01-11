'use client'

import { userChangePassword } from "@/actions/user-actions"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { userPasswordChangeSchema } from "@/validators/user-validators"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

export default function ChangePasswordForm() {

  const form = useForm<z.infer<typeof userPasswordChangeSchema>>({
    resolver: zodResolver(userPasswordChangeSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  })

  async function handlePasswordChange(values: z.infer<typeof userPasswordChangeSchema>) {
    const { success, message } = await userChangePassword(values)

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handlePasswordChange)} id="change-password" className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="grid gap-3">
            <FormField name="currentPassword" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Current Password" type="password" {...field} />
                </FormControl>
              </FormItem>
            )} />
          </div>
          <div className="grid gap-3">
            <FormField name="newPassword" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input placeholder="New Password" type="password" {...field} />
                </FormControl>
              </FormItem>
            )} />
          </div>
          <div className="grid gap-3">
            <FormField name="confirmPassword" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="Confirm Password" type="password" {...field} />
                </FormControl>
              </FormItem>
            )} />
          </div>
        </div>
        <div className="flex flex-row justify-end items-center">
          <Button form="change-password">Change Password</Button>
        </div>
      </form>
    </Form>
  )
}

