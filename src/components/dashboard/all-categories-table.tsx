'use client'
import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import GlobalTableSearch from "../tables/global-table-search"
import GlobalTable from "../tables/global-table"
import GlobalTablePagination from "../tables/global-table-pagination"
import CategoryPopup from "./category-popup"
import DeleteCategory from "./delete-category"

interface CategoryProps {
  id: string
  name: string
  slug: string
  description: string | null
  type: string
  createdAt: Date
  updatedAt: Date
}

interface CategoriesProps {
  categories: CategoryProps[]
}


export default function AllCategoriesTable({ categories }: CategoriesProps) {

  const data = categories || []
  const columnHelper = createColumnHelper<CategoryProps>()
  const columns = [
    columnHelper.accessor('name', {
      cell: info => info.getValue()
    }),
    columnHelper.accessor('description', {
      cell: info => info.getValue()
    }),
    columnHelper.accessor('type', {
      cell: info => info.getValue()
    }),
    columnHelper.accessor('createdAt', {
      header: 'Created At',
      cell: info => info.getValue().toLocaleDateString("en-GB")
    }),
    columnHelper.accessor('updatedAt', {
      header: 'Updated At',
      cell: info => info.getValue().toLocaleDateString("en-GB")
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: info => {
        return (
          <div className="flex flex-row items-center gap-2">
            <CategoryPopup type="edit" category={info.row.original} />
            <DeleteCategory categoryId={info.row.original.id} />
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
        pageSize: 20
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

