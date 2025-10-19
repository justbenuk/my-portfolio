import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchAllPosts } from "@/actions/posts-actions";
import AllPostsTable from "@/components/dashboard/all-posts-table";

export default async function PostsPage() {

  const posts = await fetchAllPosts()
  if (!posts) return null

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
      <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden p-4">
        <AllPostsTable posts={posts} />
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
