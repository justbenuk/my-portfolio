import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { fetchAllCategorysByType } from "@/actions/category-actions";
import { fetchProjectById } from "@/actions/project-actions";
import EditProjectForm from "@/forms/dashboard/edit-project-form";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = (await params)
  const categories = await fetchAllCategorysByType('work')
  const project = await fetchProjectById(id)

  if (!project) {
    return (
      <div className="p-6 lg:p-8">
        <div className="mb-8">
          <Link
            href="/dashboard/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Project Not Found</h1>
          <p className="text-slate-400">The project you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    )
  }

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
        <h1 className="text-3xl font-bold text-white mb-2">Edit Project</h1>
        <p className="text-slate-400">Update your project details</p>
      </div>

      {/* Form */}
      <div className="max-w-4xl">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <EditProjectForm categories={categories} project={project} />
        </div>
      </div>
    </div>
  );
}
