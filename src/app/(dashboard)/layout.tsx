import { RootProps } from "@/types";
import { Metadata } from "next";
import DashboardSidebar from "@/components/dashboard/sidebar";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard",
    default: "Dashboard"
  },
};

export default async function RootLayout({ children }: RootProps) {
  const session = await auth();

  return (
    <div className="min-h-screen bg-slate-950">
      <DashboardSidebar user={session?.user || {}} />
      <main className="lg:ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}
