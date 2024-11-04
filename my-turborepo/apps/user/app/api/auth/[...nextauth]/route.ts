import NextAuth from "next-auth"
import {authOption} from "../../../lib/credential"

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }