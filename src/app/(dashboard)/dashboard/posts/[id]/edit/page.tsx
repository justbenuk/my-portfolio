import type { Metadata } from 'next';
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { fetchSinglePostById } from "@/actions/posts-actions";
import EditPostForm from "@/forms/dashboard/edit-post-form";

export const metadata: Metadata = {
  title: 'Edit Post'
};

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const id = await params
  const post = await fetchSinglePostById(id)
  if (!post) return null

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard/posts"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Posts
        </Link>
        <h1 className="text-3xl font-bold text-white mb-2">Edit Post</h1>
        <p className="text-slate-400">Edit the post</p>
      </div>

      {/* Form */}
      <div className="max-w-4xl">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <EditPostForm post={post} />
        </div>
      </div>
    </div>
  );
}
