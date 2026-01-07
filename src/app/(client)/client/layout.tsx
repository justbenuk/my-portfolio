import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div></div>
      <main>{children}</main>
    </div>
  )
}

