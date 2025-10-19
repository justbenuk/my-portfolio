"use client";

import { updatePostAction } from "@/actions/dashboard-actions";
import { removeImageById } from "@/actions/image-actions";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createPostSchema } from "@/validators/dashboard-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link as LinkIcon, Save, Tag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";
import Image from 'next/image'
import PostImageUploader from "@/components/images/post-image-uploader";
import Editor from "@/components/shared/editor";

interface PostProps {
  post: {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    category: string
    tags: string[]
    published: boolean
    featured: boolean
    image: string | null
    imageAlt: string | null
    metaTitle: string | null
    metaDescription: string | null
  }
}

export default function EditPostForm({ post }: PostProps) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags.join(', '),
      published: post.published,
      featured: post.featured,
      image: post.image ?? '',
      imageAlt: post.imageAlt ?? '',
      metaTitle: post.metaTitle ?? '',
      metaDescription: post.metaDescription ?? '',
    }
  });

  // Auto-generate slug from title
  const handleTitleChange = (value: string) => {
    const slug = value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    form.setValue('slug', slug);
  };

  async function handleRemoveImage() {
    const imageUrl = form.getValues("image")
    await removeImageById(imageUrl as string)
    form.setValue("image", "")
  }

  async function handleForm(values: z.infer<typeof createPostSchema>) {
    const { success, message } = await updatePostAction(values, post.id);

    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
      router.push('/dashboard/posts');
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(handleForm)}>
        <FieldGroup>
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Title</FormLabel>
                <FormControl>
                  <Field>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleTitleChange(e.target.value);
                      }}
                      placeholder="My Awesome Blog Post"
                      className="h-10 bg-slate-800 border-slate-700 focus:border-purple-500 text-white placeholder:text-slate-500 rounded-lg"
                    />
                  </Field>
                </FormControl>
                <FieldError>
                  <FormMessage />
                </FieldError>
              </FormItem>
            )}
          />

          {/* Slug */}
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Slug</FormLabel>
                <FormControl>
                  <Field>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LinkIcon className="w-4 h-4 text-slate-500" />
                      </div>
                      <Input
                        {...field}
                        placeholder="my-awesome-blog-post"
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

          {/* Category and Tags Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Category</FormLabel>
                  <FormControl>
                    <Field>
                      <Input
                        {...field}
                        placeholder="Technology"
                        className="h-10 bg-slate-800 border-slate-700 focus:border-purple-500 text-white placeholder:text-slate-500 rounded-lg"
                      />
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
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Tags (comma-separated)</FormLabel>
                  <FormControl>
                    <Field>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Tag className="w-4 h-4 text-slate-500" />
                        </div>
                        <Input
                          {...field}
                          placeholder="react, nextjs, typescript"
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
          </div>

          {/* Excerpt */}
          <FormField
            control={form.control}
            name="excerpt"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Excerpt</FormLabel>
                <FormControl>
                  <Field>
                    <Textarea
                      {...field}
                      placeholder="A brief summary of your post..."
                      rows={3}
                      className="bg-slate-800 border-slate-700 focus:border-purple-500 text-white placeholder:text-slate-500 rounded-lg resize-none"
                    />
                  </Field>
                </FormControl>
                <FieldError>
                  <FormMessage />
                </FieldError>
              </FormItem>
            )}
          />

          {/* Content */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Content</FormLabel>
                <FormControl>
                  <Field>
                    <Editor value={field.value} onChange={field.onChange} />
                  </Field>
                </FormControl>
                <FieldError>
                  <FormMessage />
                </FieldError>
              </FormItem>
            )}
          />

          {/* Image and Alt Text */}
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
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
                        <PostImageUploader onImageUpload={field.onChange} />
                      </div>
                    )}
                  </FormControl>
                  <FieldError>
                    <FormMessage />
                  </FieldError>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageAlt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Image Alt Text</FormLabel>
                  <FormControl>
                    <Field>
                      <Input
                        {...field}
                        placeholder="Description of the image"
                        className="h-10 bg-slate-800 border-slate-700 focus:border-purple-500 text-white placeholder:text-slate-500 rounded-lg"
                      />
                    </Field>
                  </FormControl>
                  <FieldError>
                    <FormMessage />
                  </FieldError>
                </FormItem>
              )}
            />
          </div>

          {/* Meta Title and Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="metaTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Meta Title (SEO)</FormLabel>
                  <FormControl>
                    <Field>
                      <Input
                        {...field}
                        placeholder="SEO optimized title"
                        className="h-10 bg-slate-800 border-slate-700 focus:border-purple-500 text-white placeholder:text-slate-500 rounded-lg"
                      />
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
              name="metaDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Meta Description (SEO)</FormLabel>
                  <FormControl>
                    <Field>
                      <Input
                        {...field}
                        placeholder="SEO meta description"
                        className="h-10 bg-slate-800 border-slate-700 focus:border-purple-500 text-white placeholder:text-slate-500 rounded-lg"
                      />
                    </Field>
                  </FormControl>
                  <FieldError>
                    <FormMessage />
                  </FieldError>
                </FormItem>
              )}
            />
          </div>

          {/* Checkboxes */}
          <div className="flex gap-6">
            <FormField
              control={form.control}
              name="published"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-purple-500 focus:ring-purple-500"
                    />
                    <FormLabel className="text-slate-300 !m-0 cursor-pointer">Publish immediately</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-purple-500 focus:ring-purple-500"
                    />
                    <FormLabel className="text-slate-300 !m-0 cursor-pointer">Featured post</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="flex-1 h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="mr-2 w-4 h-4" />
              <span>{form.formState.isSubmitting ? "Updating..." : "Update Post"}</span>
            </Button>
            <Button
              type="button"
              onClick={() => router.push('/dashboard/posts')}
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
