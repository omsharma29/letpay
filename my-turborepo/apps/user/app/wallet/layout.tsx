import { getServerSession } from "next-auth";
import { AppSidebar } from "../components/sidebar";
import Providers from "../provider";
import { authOption } from "../lib/credential";
import { redirect } from "next/navigation";

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

export default  async function Layout({ children }: { children: React.ReactNode }) {

  const session = await getServerSession(authOption);
  if (!session) {
    redirect('/api/auth/signin');
  }
  return (
    <html lang="en">

      <body >
        <div className="flex h-screen ">
          <AppSidebar />
          <div className=" flex-1 overflow-y-auto ">
            <Providers>
            {children}
            </Providers>
          </div>
        </div>
      </body>

    </html>
  )
}
