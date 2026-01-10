
'use client'
import { revokeUserSessionByToken } from "@/actions/user-actions"
import { GlobalTable } from "@/components/global-table"
import { Button } from "@/components/ui/button"
import { SessionListProps, SessionProps } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { toast } from "sonner"

export default function ListSessions({ sessions }: SessionListProps) {
  const data = sessions || []
  
  async function handleRevokeToken(token: string) {
    const { success, message } = await revokeUserSessionByToken(token)
    
    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
    }
  }

  const columns: ColumnDef<SessionProps>[] = [
    {
      accessorKey: 'token',
      header: 'Token',
      cell: ({row}) => {
        const token = row.original.token.slice(0, 10)
        return (
          <span>{token}...</span>
        )
      }
    },
    {
      accessorKey: 'createdAt',
      header: 'Created',
    },
    {
      accessorKey: 'updatedAt',
      header: 'updated'
    }
    ,
    {
      accessorKey: 'expiresAt',
      header: 'expires'
    },
    {
      accessorKey: 'actions',
      header: 'Actions',
      cell: ({row}) => {
        const id = row.original.id
        return (
          <Button variant={'destructive'} onClick={() => handleRevokeToken(row.original.token)}>Revoke</Button>
        )
      }
    }

  ]

  return (
    <GlobalTable columns={columns} data={data} searchKey="expiresAt"/>
  )
}

