import { RootProps } from "@/types";
import { Metadata } from "next";
import DashboardSidebar from "@/components/dashboard/sidebar";
import { auth } from "@/lib/auth";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard",
    default: "Dashboard"
  },
};

export default async function RootLayout({ children }: RootProps) {
  const session = await auth();

  return (
    <SidebarProvider className="bg-slate-950">
      <DashboardSidebar user={session?.user || {}} />
      <SidebarInset className="bg-slate-950">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
