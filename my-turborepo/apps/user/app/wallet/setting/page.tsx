import { getServerSession } from "next-auth";
import { authOption } from "../../lib/credential";
import Logout from "../../components/logout";


export default async function page() {
    const session = await getServerSession(authOption);


      const user = session?.user;


  return (
    <>
    <div>
      <h1>Settings Page</h1>
      <p>Welcome, {user?.name}</p>
      <p>Email: {user?.email}</p>
      {/* Load and display other user-specific data */}
      <Logout/>
    </div>
    </>
  )
}
