import { auth } from "@/lib/auth";
import { RootProps } from "@/types";
import { redirect } from "next/navigation";

export default async function AuthTemplate({ children }: RootProps) {
  const session = await auth()
  if (session?.user) redirect('/portal')
  return (
    <>{children}</>
  )
}

