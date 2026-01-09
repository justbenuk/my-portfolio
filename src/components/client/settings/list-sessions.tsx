import { fetchUsersCurrentSessions } from "@/actions/user-actions"
import { GlobalTable } from "@/components/global-table"

export default async function ListSessions() {
  const data = await fetchUsersCurrentSessions() || []

  const columns = [
    {
      accessorKey: 'token',
      header: 'Token'
    },
    {
      accessorKey: 'createdAt',
      header: 'Created'
    },
    {
      accessorKey: 'updatedAt',
      header: 'updated'
    }
    ,
    {
      accessorKey: 'expiresAt',
      header: 'expires'
    }

  ]

  return (
    <GlobalTable columns={columns} data={data} />
  )
}

