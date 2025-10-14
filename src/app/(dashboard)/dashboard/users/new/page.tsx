import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import NewUserForm from "@/forms/dashboard/new-user-form";

export default function NewUserPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard/users"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Users
        </Link>
        <h1 className="text-3xl font-bold text-white mb-2">Create New User</h1>
        <p className="text-slate-400">Add a new user account to the system</p>
      </div>

      {/* Form */}
      <div className="max-w-2xl">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <NewUserForm />
        </div>
      </div>
    </div>
  );
}
