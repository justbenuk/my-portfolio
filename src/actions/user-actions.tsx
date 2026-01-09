import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function fetchUsersCurrentSessions() {
  try {
    const sessions = await auth.api.listSessions({
      headers: await headers()
    })
    return sessions
  } catch (error) {
    console.error(error)
  }
}

