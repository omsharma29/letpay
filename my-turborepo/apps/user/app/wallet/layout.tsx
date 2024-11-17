"use client"
import { SidebarProvider, SidebarTrigger } from "@repo/ui/sidebar"
import { AppSidebar } from "../components/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
