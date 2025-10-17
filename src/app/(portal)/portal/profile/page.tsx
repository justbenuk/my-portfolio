import { auth } from "@/lib/auth";
import ProfileForm from "@/forms/portal/profile-form";
import { User, Mail, Shield, Info } from "lucide-react";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Profile Settings
        </h1>
        <p className="text-slate-400">
          Manage your account information and preferences
        </p>
      </div>

      <div className="max-w-4xl">
        {/* Profile Info Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6 pb-6 border-b border-slate-800">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              {session.user.image ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  className="w-full h-full rounded-full object-cover"
                  width={300}
                  height={300}
                />
              ) : (
                <User className="w-10 h-10 text-white" />
              )}
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl font-bold text-white mb-2">
                {session.user.name}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-slate-400">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{session.user.email}</span>
                </div>
                <div className="hidden sm:block text-slate-600">•</div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="capitalize">{session.user.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Update Profile</h3>
            <ProfileForm user={session.user} />
          </div>
        </div>

        {/* Account Info Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-teal-400" />
            Account Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">User ID</p>
              <p className="text-slate-300 font-mono text-sm">{session.user.id}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Account Type</p>
              <p className="text-slate-300 capitalize">{session.user.role}</p>
            </div>
            <div className="col-span-2 border-dashed border-2 p-6 border-red-500">
              <p className="text-red-500">All changes will take affect after logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
