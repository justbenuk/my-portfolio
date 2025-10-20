import PageContainer from "@/components/shared/page-container";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import CommentForm from "@/components/shared/comment-form";
import CommentsList from "@/components/shared/comments-list";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify"
import { fetchSinglePostBySlug } from "@/actions/posts-actions";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params

  const post = await fetchSinglePostBySlug(slug)
  if (!post) {
    return notFound()
  }


  // Get related posts (same category, excluding current)
  const relatedPosts = await db.post.findMany({
    where: {
      published: true,
      category: post.category,
      NOT: { id: post.id },
    },
    take: 3,
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      category: true,
    },
  });

  const sanitizedHtml = DOMPurify.sanitize(post.content)


  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Button */}
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-200 animate-fade-in-up"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all posts</span>
        </Link>

        {/* Article Header */}
        <article className="space-y-8">
          <header className="space-y-6 animate-fade-in-up animation-delay-200">
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-slate-300">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Draft'}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-800 animate-fade-in-up animation-delay-400">
            <Image src={post.image as string} alt={post.imageAlt || 'post image'} width={1001} height={700} />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none animate-fade-in-up animation-delay-600">
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} className="mt-10" />
            </div>
          </div>

          {/* Share Section */}
          <div className="pt-12 border-t border-white/10 animate-fade-in-up animation-delay-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Share this article</h3>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
                <Share2 className="w-5 h-5 text-teal-400" />
                <span className="text-white">Share</span>
              </button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-12 space-y-8">
            <h2 className="text-3xl font-bold text-white">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/posts/${relatedPost.slug}`}
                  className="group rounded-2xl overflow-hidden glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-video relative overflow-hidden bg-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="px-2 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs">
                      {relatedPost.category}
                    </span>

                    <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-slate-400 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div className="space-y-8 pt-12 border-t border-white/10">
          <CommentsList postId={post.id} />
          <CommentForm postId={post.id} />
        </div>

        {/* CTA Section */}
        <div className="relative p-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
                Let&apos;s Work Together
              </span>
            </h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it and discuss how I can help.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-2xl shadow-teal-500/30 transition-all duration-300 hover:shadow-teal-500/50 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
