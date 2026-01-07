'use client'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSiteSchema } from "@/validators/contact-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaPlane } from "react-icons/fa6";
import z from "zod";

export default function FrontContactForm() {

  //set up the form
  const form = useForm({
    resolver: zodResolver(contactSiteSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  async function handleFormSubmit(values: z.infer<typeof contactSiteSchema>) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-gray-300 text-sm font-medium mb-2">Name</FormLabel>
                <FormControl>
                  <Input placeholder='Your Name' className="w-full p-3 rounded-lg bg-dark-bg border border-dark-border focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-gray-300 text-sm font-medium mb-2">Name</FormLabel>
                <FormControl>
                  <Input placeholder='you@example.com' className="w-full p-3 rounded-lg bg-dark-bg border border-dark-border focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-gray-300 text-sm font-medium mb-2">Name</FormLabel>
                <FormControl>
                  <Textarea placeholder='Tell me about your project' className="w-full p-3 rounded-lg bg-dark-bg border border-dark-border focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row items-center justify-end">
          <Button className="bg-orange-400" size={'lg'}>
            <FaPlane />
            <span>Send Message</span>
          </Button>
        </div>
      </form>
    </Form >
  )
}

