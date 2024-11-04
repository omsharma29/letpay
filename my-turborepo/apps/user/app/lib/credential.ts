import  prisma from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
require('dotenv').config();





export const authOption = {
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                name: {label: "Name", type: "text", placeholder: "your name"},
                email: {label: "Email", type: "email", placeholder: "You email"},
                password: {label: "Password", type: "password", placeholder: 'Your password'}
            },

            async authorize(credentials : any) {
                
                const hashedPassword = await bcrypt.hash(credentials.password, 10)
                const existinguser = await prisma.user.findFirst({
                    where : {
                        email : credentials.email
                    }
                })
               
                if(existinguser){
                    const passwordvalidation = await bcrypt.compare(credentials.password, existinguser.password)
                    if( passwordvalidation){
                        return{
                        id: existinguser.id.toString(),
                        name: existinguser.name,
                        email: existinguser.email
                        }
                    
                    }
                    return null;
                }

            try {
                const user = await prisma.user.create({
                    data:{
                        name : credentials.name,
                        email: credentials.email,
                        password: hashedPassword,
                        auth_type: "Email"
                    }
                })

                return {
                    id: user.id.toString(),
                    name: user.name,
                    email: user.email
                }
            } catch (error) {

                console.log(error)
                
            }

            return null;
            },

        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",  // Fallback to empty string if undefined
            clientSecret: process.env.GOOGLE_SECRET ?? "",  // Fallback to empty string if undefined
        }),

    ],

    secret: process.env.NEXTAUTH_SECRET || "secret",
    callbacks:{
        async session({ token, session }: any) {
            session.user.id = token.sub

            return session
    }
    // async signIn({ account, profile }: any) {
    //     if (account.provider === "google") {
    //       return profile.email_verified && profile.email.endsWith("@example.com")
    //     }
    //     return true // Do different verification for other providers that don't have `email_verified`
    //   },
}

}
