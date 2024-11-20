"use client";
import { SidebarProvider, SidebarTrigger } from "@repo/ui/sidebar";
import { AppSidebar } from "../components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      
        <AppSidebar />
        <div className=" flex ">
        <main className="flex-1">
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
