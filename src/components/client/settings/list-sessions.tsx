
'use client'
import { revokeUserSessionByToken } from "@/actions/user-actions"
import { GlobalTable } from "@/components/global-table"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { SessionListProps, SessionProps } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { toast } from "sonner"

export default function ListSessions({ sessions }: SessionListProps) {
  const allSessions = sessions || []
  const {  data: session } = authClient.useSession()

  console.log(session)

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
      cell: ({row}) => row.original.createdAt.toLocaleDateString()
    },
    {
      accessorKey: 'updatedAt',
      header: 'Last Updated',
      cell: ({row}) => row.original.updatedAt.toLocaleDateString()
    },
    {
      accessorKey: 'expiresAt',
      header: 'Expires',
      cell: ({row}) => row.original.expiresAt.toLocaleDateString()
    },
    {
      accessorKey: 'actions',
      header: 'Actions',
      cell: ({row}) => {
        const id = row.original.id
        const isCurrentSession = row.original.token === session?.session.token;
        return (
          <Button variant={isCurrentSession ? 'secondary' : 'destructive'} disabled={isCurrentSession} onClick={() => handleRevokeToken(row.original.token)}>{isCurrentSession ? "Current Session" : "Revoke"}</Button>
        )
      }
    }

  ]

  return (
    <GlobalTable columns={columns} data={allSessions} size={10}/>
  )
}

