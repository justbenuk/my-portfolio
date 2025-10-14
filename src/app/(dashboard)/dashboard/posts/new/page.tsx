import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import NewPostForm from "@/forms/dashboard/new-post-form";

export default function NewPostPage() {
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
        <h1 className="text-3xl font-bold text-white mb-2">Create New Post</h1>
        <p className="text-slate-400">Write a new blog post or article</p>
      </div>

      {/* Form */}
      <div className="max-w-4xl">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <NewPostForm />
        </div>
      </div>
    </div>
  );
}
