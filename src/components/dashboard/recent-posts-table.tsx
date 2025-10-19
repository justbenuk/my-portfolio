'use client'

import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import GlobalTableSearch from "../tables/global-table-search"
import GlobalTable from "../tables/global-table"
import GlobalTablePagination from "../tables/global-table-pagination"
import { Badge } from "../ui/badge"
import { EyeIcon, EyeOffIcon } from "lucide-react"

interface PostProps {
  id: string,
  title: string
  published: boolean
  createdAt: Date
}

interface PostsProps {
  recentPosts: PostProps[]
}

export default function RecentPostsTable({ recentPosts }: PostsProps) {
  const data = recentPosts || []
  const columnHelper = createColumnHelper<PostProps>()

  const columns = [
    columnHelper.accessor('title', {
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
    columnHelper.accessor('createdAt', {
      cell: (info) => info.getValue().toLocaleDateString("en-GB")
    }),
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

