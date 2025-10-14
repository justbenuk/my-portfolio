import { db } from "@/lib/db";
import Link from "next/link";
import { Plus, Edit, Trash2, Shield, ShieldCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function UsersPage() {
  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      image: true,
      emailVerified: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return (
    <div className="p-6 lg:p-8">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Users</h1>
          <p className="text-slate-400">Manage user accounts and permissions</p>
        </div>
        <Link href="/dashboard/users/new">
          <Button className="bg-purple-500 hover:bg-purple-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New User
          </Button>
        </Link>
      </div>

      {/* Users Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800 border-b border-slate-700">
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-slate-300">User</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-300">Email</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-300">Role</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-300">Status</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-300">Joined</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                          {user.image ? (
                            <img
                              src={user.image}
                              alt={user.name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <User className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium">{user.name}</p>
                          <p className="text-sm text-slate-500">ID: {user.id.slice(0, 8)}...</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-slate-300">{user.email}</span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          user.role === "admin"
                            ? "bg-purple-500/10 text-purple-400"
                            : "bg-cyan-500/10 text-cyan-400"
                        }`}
                      >
                        {user.role === "admin" ? (
                          <>
                            <ShieldCheck className="w-3 h-3" />
                            Admin
                          </>
                        ) : (
                          <>
                            <Shield className="w-3 h-3" />
                            User
                          </>
                        )}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          user.emailVerified
                            ? "bg-green-500/10 text-green-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {user.emailVerified ? "Verified" : "Unverified"}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-slate-400 text-sm">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/dashboard/users/${user.id}/edit`}>
                          <Button
                            size="sm"
                            className="bg-slate-700 hover:bg-slate-600 text-white"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          className="bg-red-500/10 hover:bg-red-500/20 text-red-400"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-400">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400 mb-1">Total Users</p>
          <p className="text-2xl font-bold text-white">{users.length}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400 mb-1">Admins</p>
          <p className="text-2xl font-bold text-purple-400">
            {users.filter((u) => u.role === "admin").length}
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400 mb-1">Verified</p>
          <p className="text-2xl font-bold text-green-400">
            {users.filter((u) => u.emailVerified).length}
          </p>
        </div>
      </div>
    </div>
  );
}
