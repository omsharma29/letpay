import { getServerSession } from "next-auth"
import { authOption } from "../lib/credential";

export default async function Greeting() {
  const session = await getServerSession(authOption);

  const user = session?.user;

    return (
      <div className="flex flex-col gap-1 p-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          Welcome Back, {user?.name} <span className="text-yellow-400">👋</span>
        </h2>
        <p className="text-gray-400 text-sm font-normal">
        "Here's what's happening with your store today."
        </p>
      </div>
    )
  }