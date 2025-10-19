import { db } from "@/lib/db";
import { MessageSquare, CheckCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { approveCommentAction, deleteCommentAction } from "@/actions/comment-actions";

async function ApproveButton({ commentId }: { commentId: string }) {
  async function handleApprove() {
    "use server";
    await approveCommentAction(commentId);
  }

  return (
    <form action={handleApprove}>
      <Button
        type="submit"
        size="sm"
        className="bg-green-500/10 hover:bg-green-500/20 text-green-400 border-green-500/20"
      >
        <CheckCircle className="w-4 h-4 mr-1" />
        Approve
      </Button>
    </form>
  );
}

async function DeleteButton({ commentId }: { commentId: string }) {
  async function handleDelete() {
    "use server";
    await deleteCommentAction(commentId);
  }

  return (
    <form action={handleDelete}>
      <Button
        type="submit"
        size="sm"
        className="bg-red-500/10 hover:bg-red-500/20 text-red-400"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </form>
  );
}

export default async function CommentsPage() {
  const [pendingComments, approvedComments, totalComments] = await Promise.all([
    db.comment.findMany({
      where: { approved: false },
      orderBy: { createdAt: "desc" },
      include: {
        post: {
          select: {
            title: true,
            slug: true,
          },
        },
      },
    }),
    db.comment.findMany({
      where: { approved: true },
      orderBy: { createdAt: "desc" },
      take: 20,
      include: {
        post: {
          select: {
            title: true,
            slug: true,
          },
        },
      },
    }),
    db.comment.count(),
  ]);

  return (
    <div className="p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Comments</h1>
        <p className="text-slate-400">Manage and moderate blog comments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400 mb-1">Total Comments</p>
          <p className="text-2xl font-bold text-white">{totalComments}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400 mb-1">Pending Approval</p>
          <p className="text-2xl font-bold text-yellow-400">{pendingComments.length}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400 mb-1">Approved</p>
          <p className="text-2xl font-bold text-green-400">{approvedComments.length}</p>
        </div>
      </div>

      {/* Pending Comments */}
      {pendingComments.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-yellow-400" />
            Pending Approval ({pendingComments.length})
          </h2>
          <div className="space-y-4">
            {pendingComments.map((comment) => (
              <div
                key={comment.id}
                className="bg-slate-900 border border-yellow-500/20 rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-semibold">{comment.author}</h3>
                      <span className="text-sm text-slate-500">{comment.email}</span>
                      <span className="text-xs text-slate-500">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mb-2">
                      On: <span className="text-teal-400">{comment.post.title}</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <ApproveButton commentId={comment.id} />
                    <DeleteButton commentId={comment.id} />
                  </div>
                </div>
                <p className="text-slate-300 bg-slate-800 p-4 rounded-lg">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Approved Comments */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-400" />
          Approved Comments
        </h2>
        {approvedComments.length > 0 ? (
          <div className="space-y-4">
            {approvedComments.map((comment) => (
              <div
                key={comment.id}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-semibold">{comment.author}</h3>
                      <span className="text-sm text-slate-500">{comment.email}</span>
                      <span className="text-xs text-slate-500">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">
                      On: <span className="text-teal-400">{comment.post.title}</span>
                    </p>
                  </div>
                  <DeleteButton commentId={comment.id} />
                </div>
                <p className="text-slate-300">{comment.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-400 text-center py-8">No approved comments yet</p>
        )}
      </div>
    </div>
  );
}
