"use client";

import { updateProfileAction } from "@/actions/profile-actions";
import ProfileImageUploader from "@/components/images/profile-image-uploader";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateProfileSchema } from "@/validators/profile-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";
import Image from "next/image";
import { removeImageById } from "@/actions/image-actions";


interface ProfileFormProps {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export default function ProfileForm({ user }: ProfileFormProps) {
  const form = useForm({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: user.name || '',
      email: user.email || '',
      image: user.image || '',
    }
  });

  async function handleForm(values: z.infer<typeof updateProfileSchema>) {
    const { success, message } = await updateProfileAction(values);

    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  }

  async function handleRemoveImage() {
    const imageUrl = form.getValues("image")
    await removeImageById(imageUrl as string)
    form.setValue("image", "")
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(handleForm)}>
        <FieldGroup>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
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

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Field>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-4 h-4 text-slate-500" />
                      </div>
                      <Input
                        {...field}
                        placeholder="Email address"
                        type="email"
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

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  {/* Use the field.value to conditionally render the image or uploader */}
                  {field.value ? (
                    <div className="relative w-full h-auto">
                      <Image src={field.value} alt="Uploaded Crime Image" className="rounded-md object-cover" width={300} height={300} />
                      <Button onClick={handleRemoveImage} variant="destructive" className="absolute top-2 right-2">
                        Remove
                      </Button>
                    </div>
                  ) : (
                    // Pass the `field.onChange` function to your component
                    <div className="border border-dashed p-12">
                      <ProfileImageUploader onImageUpload={field.onChange} />
                    </div>
                  )}
                </FormControl>
                <FieldError>
                  <FormMessage />
                </FieldError>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="mr-2 w-4 h-4" />
            <span>{form.formState.isSubmitting ? "Saving..." : "Save Changes"}</span>
          </Button>
        </FieldGroup>
      </form>
    </Form>
  );
}
