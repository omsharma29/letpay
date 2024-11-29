import { getServerSession } from "next-auth"
import { authOption } from "./lib/credential";
import Logout from "./components/logout";
import Signin from "./components/signin";

async function Home() {
  const session = await getServerSession(authOption);
  return (
    <>
      home page

      {!session ? <Signin/> : <Logout/> }
      {JSON.stringify(session)}
      

    </>
  )
}

export default Home