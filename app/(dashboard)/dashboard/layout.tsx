import { getCurrentUser } from "@/lib/session";
import { notFound } from "next/navigation";
import { dashboardConfig } from "@/config/dashboard";
import MainNav from "@/components/main-nav";
import UserAccountNav from "@/components/user-account-nav";
import SidebarNav from "@/components/sidebar-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser();
  if (!user) {
    return notFound();
  }
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
          <UserAccountNav
            user={{
              name: user.name,
              email: user.email,
            }}
          />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <SidebarNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
