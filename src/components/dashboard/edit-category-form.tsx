'use client'
import { createcategorySchema } from "@/validators/category-validators"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { PlusIcon } from "lucide-react"
import { FieldError, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select"
import { SelectValue } from "@radix-ui/react-select"
import { createCategoryAction } from "@/actions/category-actions"
import { toast } from "react-toastify"

export default function EditCategoryForm() {
  const form = useForm<z.infer<typeof createcategorySchema>>({
    resolver: zodResolver(createcategorySchema),
    defaultValues: {
      name: '',
      description: '',
      type: ''
    }
  })

  async function handleForm(values: z.infer<typeof createcategorySchema>) {
    const { success, message } = await createCategoryAction(values)
    if (!success) {
      toast.error(message)
    } else {
      form.reset()
      toast.success(message)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleForm)} id="add">
        <DialogTrigger asChild>
          <Button variant={'ghost'} className="flex flex-row items-center gap-4 bg-teal-500">
            <PlusIcon />
            <span>New Category</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6">
            <FormField
              name='name'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FieldLabel>Name</FieldLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FieldError>
                    <FormMessage />
                  </FieldError>
                </FormItem>
              )}
            />
            <FormField
              name='description'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FieldLabel>Description</FieldLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FieldError>
                    <FormMessage />
                  </FieldError>
                </FormItem>
              )}
            />
            <FormField
              name='type'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FieldLabel>Type</FieldLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue="field.value">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder='type' />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectItem value="post">Post</SelectItem>
                        <SelectItem value="work">Work</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FieldError>
                    <FormMessage />
                  </FieldError>
                </FormItem>
              )}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" form="add">Add Category</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Form>
  )
}

