import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import NewProjectForm from "@/forms/dashboard/new-project-form";
import { fetchAllCategorysByType } from "@/actions/category-actions";

export default async function NewProjectPage() {
  const categories = await fetchAllCategorysByType('work')
  console.log(categories)
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <h1 className="text-3xl font-bold text-white mb-2">Create New Project</h1>
        <p className="text-slate-400">Add a new project to your portfolio</p>
      </div>

      {/* Form */}
      <div className="max-w-4xl">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <NewProjectForm categories={categories} />
        </div>
      </div>
    </div>
  );
}
