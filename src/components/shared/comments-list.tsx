import { db } from "@/lib/db";
import { MessageSquare, User } from "lucide-react";

interface CommentsListProps {
  postId: string;
}

export default async function CommentsList({ postId }: CommentsListProps) {
  const comments = await db.comment.findMany({
    where: {
      postId,
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (comments.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 text-center">
        <MessageSquare className="w-12 h-12 text-slate-600 mx-auto mb-4" />
        <p className="text-slate-400">No comments yet. Be the first to comment!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-teal-400" />
        Comments ({comments.length})
      </h3>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-white font-semibold">{comment.author}</h4>
                  <span className="text-sm text-slate-500">
                    {new Date(comment.createdAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {comment.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
