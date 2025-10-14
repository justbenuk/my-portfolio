import { isLoggedInAction } from "@/actions/auth-actions"
import { RootProps } from "@/types"

export default async function PortalTemplate({ children }: RootProps) {
  await isLoggedInAction()

  return (
    <>{children}</>
  )
}

