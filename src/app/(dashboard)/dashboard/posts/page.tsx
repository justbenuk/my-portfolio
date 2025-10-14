import { db } from "@/lib/db";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function PostsPage() {
  const posts = await db.post.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
      published: true,
      featured: true,
      views: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return (
    <div className="p-6 lg:p-8">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Blog Posts</h1>
          <p className="text-slate-400">Manage your blog posts and articles</p>
        </div>
        <Link href="/dashboard/posts/new">
          <Button className="bg-purple-500 hover:bg-purple-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      {/* Posts Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800 border-b border-slate-700">
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-slate-300">Title</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-300">Category</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-300">Status</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-300">Views</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-300">Created</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">{post.title}</span>
                        {post.featured && (
                          <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-slate-500">/{post.slug}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-slate-300">{post.category}</span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          post.published
                            ? "bg-green-500/10 text-green-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {post.published ? (
                          <>
                            <Eye className="w-3 h-3" />
                            Published
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3 h-3" />
                            Draft
                          </>
                        )}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-slate-300">{post.views}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-slate-400 text-sm">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/dashboard/posts/${post.id}/edit`}>
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
                    No posts found. Create your first post to get started.
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
          <p className="text-sm text-slate-400 mb-1">Total Posts</p>
          <p className="text-2xl font-bold text-white">{posts.length}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400 mb-1">Published</p>
          <p className="text-2xl font-bold text-green-400">
            {posts.filter((p) => p.published).length}
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400 mb-1">Drafts</p>
          <p className="text-2xl font-bold text-yellow-400">
            {posts.filter((p) => !p.published).length}
          </p>
        </div>
      </div>
    </div>
  );
}
