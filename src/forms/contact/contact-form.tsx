'use client'
import { Button } from "@/components/ui/button"
import { Field, FieldContent, FieldError } from "@/components/ui/field"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contyactFormSchema } from "@/validators/contact-validators"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { sendContactMessageAction } from "@/actions/contact-actions"
import z from "zod"
import { toast } from "react-toastify"
import { SendHorizontal } from "lucide-react"

export default function ContactForm() {

  const form = useForm({
    resolver: zodResolver(contyactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  })

  async function handleForm(values: z.infer<typeof contyactFormSchema>) {
    const { success, message } = await sendContactMessageAction(values)

    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
      form.reset()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleForm)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Field>
                  <FieldContent>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your Name"
                        className="h-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-xl transition-all duration-300"
                      />
                    </FormControl>
                    <FieldError>
                      <FormMessage className="text-red-400" />
                    </FieldError>
                  </FieldContent>
                </Field>
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Field>
                  <FieldContent>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your Email"
                        className="h-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-xl transition-all duration-300"
                      />
                    </FormControl>
                    <FieldError>
                      <FormMessage className="text-red-400" />
                    </FieldError>
                  </FieldContent>
                </Field>
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="subject"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <Field>
                <FieldContent>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Subject"
                      className="h-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-xl transition-all duration-300"
                    />
                  </FormControl>
                  <FieldError>
                    <FormMessage className="text-red-400" />
                  </FieldError>
                </FieldContent>
              </Field>
            </FormItem>
          )}
        />

        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <Field>
                <FieldContent>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Your Message"
                      className="min-h-40 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-slate-500 rounded-xl transition-all duration-300 resize-none"
                    />
                  </FormControl>
                  <FieldError>
                    <FormMessage className="text-red-400" />
                  </FieldError>
                </FieldContent>
              </Field>
            </FormItem>
          )}
        />

        <div className="flex flex-row justify-end pt-4">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="group px-8 py-6 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {form.formState.isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send Message</span>
                <SendHorizontal className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Form >
  )
}

