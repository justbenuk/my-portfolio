import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthTemplate({ children }: { children: ReactNode }) {

  //check if a user is logged in and redirect  if they are
  const session = await auth.api.getSession({
    headers: await headers()
  })

  //redirect to thew client portal if there is one
  if (session?.user) redirect('/client')

  return (
    <>{children}</>
  )
}

