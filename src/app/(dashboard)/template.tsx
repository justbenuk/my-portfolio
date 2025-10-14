import { isAdminAction } from "@/actions/auth-actions"
import { RootProps } from "@/types"

export default async function PortalTemplate({ children }: RootProps) {
  await isAdminAction()

  return (
    <div>{children}</div>
  )
}

