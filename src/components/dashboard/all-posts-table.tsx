'use client'

import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import GlobalTableSearch from "../tables/global-table-search"
import GlobalTable from "../tables/global-table"
import GlobalTablePagination from "../tables/global-table-pagination"
import { Badge } from "../ui/badge"
import { EyeIcon, EyeOffIcon, PencilIcon } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

interface PostProps {
  id: string,
  title: string
  slug: string
  category: string
  published: boolean
  featured: boolean
  views: number
  createdAt: Date
  updatedAt: Date
}

interface PostsProps {
  posts: PostProps[]
}

export default function AllPostsTable({ posts }: PostsProps) {
  const data = posts || []
  const columnHelper = createColumnHelper<PostProps>()

  console.log(posts)

  const columns = [
    columnHelper.accessor('title', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('category', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('published', {
      header: 'Status',
      cell: (info) => info.getValue() ? (<Badge variant={'outline'} className="bg-green-500/50 px-3 py-1 text-xs font-medium flex flex-row items-center">
        <EyeIcon />
        <span>Published</span>
      </Badge>) : (<Badge variant={'outline'} className="bg-yellow-500/50 px-3 py-1 text-xs font-medium flex flex-row items-center">
        <EyeOffIcon />
        <span>Draft</span>
      </Badge>)
    }),
    columnHelper.accessor('featured', {
      cell: (info) => info.getValue() ? (<Badge variant={'outline'} className="bg-green-500/50 px-3 py-1 text-xs font-medium">Featured</Badge>) : (<Badge variant={'outline'} className="bg-red-500/50 px-3 py-1 text-xs font-medium">Featured</Badge>)
    }),
    columnHelper.accessor('views', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('createdAt', {
      header: 'Created At',
      cell: (info) => info.getValue().toLocaleDateString("en-GB")
    }),
    columnHelper.accessor('updatedAt', {
      header: 'Updated At',
      cell: (info) => info.getValue().toLocaleDateString("en-GB")
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: info => {
        return (
          <div className="flex flex-row items-center gap-2">
            <Button variant={'outline'} size={'sm'} className="bg-yellow-500/50 border-yellow-500" asChild>
              <Link href={`/dashboard/posts/${info.row.original.id}/edit`}>
                <PencilIcon className="text-yellow-500" />
              </Link>
            </Button>
          </div>
        )
      }
    })

  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 10
      }
    }
  })
  return (
    <>
      <GlobalTableSearch table={table} />
      <GlobalTable table={table} />
      <GlobalTablePagination table={table} />
    </>
  )
}

