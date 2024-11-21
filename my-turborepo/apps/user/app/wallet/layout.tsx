"use client";
import { AppSidebar } from "../components/sidebar";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <SidebarProvider>
//       <div className="flex h-screen "> 
//         <AppSidebar />
//         <div className=" flex-1 overflow-y-auto ">
//         <main className="flex-1 p-4">
//           {children}
//         </main>
//       </div>
//       </div>
//     </SidebarProvider>
//   );
// } 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <body >
        <div className="flex h-screen ">
          <AppSidebar />
          <div className=" flex-1 overflow-y-auto ">
            {children}
          </div>
        </div>
      </body>

    </html>
  )
}
