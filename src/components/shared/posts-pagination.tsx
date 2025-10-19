"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PostsPaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function PostsPagination({ currentPage, totalPages }: PostsPaginationProps) {
  const pages = [];
  const maxVisiblePages = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 pt-8">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={`/posts?page=${currentPage - 1}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white hover:border-teal-500 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </Link>
      ) : (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-600 cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </div>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {startPage > 1 && (
          <>
            <Link
              href="/posts?page=1"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-white hover:border-teal-500 transition-colors"
            >
              1
            </Link>
            {startPage > 2 && (
              <span className="px-2 text-slate-500">...</span>
            )}
          </>
        )}

        {pages.map((page) => (
          <Link
            key={page}
            href={`/posts?page=${page}`}
            className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${
              page === currentPage
                ? "bg-teal-500 border-teal-500 text-white font-bold"
                : "bg-slate-800 border-slate-700 text-white hover:border-teal-500"
            }`}
          >
            {page}
          </Link>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="px-2 text-slate-500">...</span>
            )}
            <Link
              href={`/posts?page=${totalPages}`}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-white hover:border-teal-500 transition-colors"
            >
              {totalPages}
            </Link>
          </>
        )}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={`/posts?page=${currentPage + 1}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white hover:border-teal-500 transition-colors"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-600 cursor-not-allowed">
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}
