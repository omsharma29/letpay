import { getServerSession } from "next-auth";
import { authOption } from "../../lib/credential";
import Logout from "../../components/logout";



export default async function page() {
  const session = await getServerSession(authOption);

  if (session?.user) {
    console.log('user : ', session)
  }
  const user = session?.user;


  return (

    <>
      <div className="py-5 px-5">
        <h1>Settings Page</h1>
        <p>Welcome, {user?.name}</p>
        <p className="pb-3" >Email: {user?.email}</p>
        <Logout  />

      </div>
    </>
  )
}
