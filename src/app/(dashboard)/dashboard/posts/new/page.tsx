import type { Metadata } from 'next';
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import NewPostForm from "@/forms/dashboard/new-post-form";
import DashboardTitle from '@/components/dashboard/dashboard-title';
import { fetchAllCategorysByType } from '@/actions/category-actions';

export const metadata: Metadata = {
  title: 'New Blog Post'
};

export const dynamic = 'force-dynamic';

export default async function NewPostPage() {
  const categories = await fetchAllCategorysByType('post')

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
        <DashboardTitle title='Create New Post' description='Write a new blog post or article' />
      </div>

      {/* Form */}
      <div className="max-w-4xl">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <NewPostForm categories={categories} />
        </div>
      </div>
    </div>
  );
}
