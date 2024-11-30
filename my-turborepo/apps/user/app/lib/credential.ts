// import prisma from "@repo/db/client";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";
// import GoogleProvider from "next-auth/providers/google";
// require('dotenv').config();

// export const authOption = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         name: { label: "Name", type: "text", placeholder: "Your name" },
//         email: { label: "Email", type: "email", placeholder: "Your email" },
//         password: { label: "Password", type: "password", placeholder: "Your password" }
//       },

//       async authorize(credentials: any) {
//         const existingUser = await prisma.user.findFirst({
//           where: { email: credentials.email },
//         });

//         if (existingUser) {
//           const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
//           if (passwordValidation) {
//             return {
//               id: existingUser.id.toString(),
//               name: existingUser.name,
//               email: existingUser.email,
//             };
//           }
//           return null; // Invalid password
//         }

//         try {
//           const hashedPassword = await bcrypt.hash(credentials.password, 10);
//           const newUser = await prisma.user.create({
//             data: {
//               name: credentials.name,
//               email: credentials.email,
//               password: hashedPassword,
//               auth_type: "Email",
//             },
//           });

//           return {
//             id: newUser.id.toString(),
//             name: newUser.name,
//             email: newUser.email,
//           };
//         } catch (error) {
//           console.error(error);
//           return null; // Handle errors (e.g., email already in use)
//         }
//       },
//     }),

//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID ?? "", // Fallback to empty string if undefined
//       clientSecret: process.env.GOOGLE_SECRET ?? "", // Fallback to empty string if undefined
//     }),
//   ],

//   secret: process.env.NEXTAUTH_SECRET || "secret",

//   callbacks: {
//     async session({ token, session }: any) {
//       // Ensure the user ID is added to the session properly
//       session.user.id = token.id;
//       return session;
//     },

//     async redirect({ url, baseUrl }: any) {
//       // Automatically redirect to /wallet/dashboard after sign-in
//       return baseUrl + '/wallet/dashboard';
//     },

//     // Optional: Add extra checks for other providers like Google (uncomment if needed)
//     // async signIn({ account, profile }: any) {
//     //   if (account.provider === "google") {
//     //     return profile.email_verified && profile.email.endsWith("@example.com");
//     //   }
//     //   return true; // For other providers, just return true for now
//     // },
//   },
// };


import prisma from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
require("dotenv").config();

export const authOption = {
  providers: [
    // Credentials Provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "Your name" },
        email: { label: "Email", type: "email", placeholder: "Your email" },
        password: { label: "Password", type: "password", placeholder: "Your password" },
      },
      async authorize(credentials: any) {
        const existingUser = await prisma.user.findFirst({
          where: { email: credentials.email },
        });

        if (existingUser) {
          const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.email,
            };
          }
          return null; // Invalid password
        }

        try {
          const hashedPassword = await bcrypt.hash(credentials.password, 10);
          const newUser = await prisma.user.create({
            data: {
              name: credentials.name,
              email: credentials.email,
              password: hashedPassword,
              auth_type: "Email",
            },
          });

          return {
            id: newUser.id.toString(),
            name: newUser.name,
            email: newUser.email,

          };

        } catch (error) {
          console.error(error);
          return null; // Handle errors (e.g., email already in use)
        }
      },
    }),

    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "", // Ensure your Google ID is set correctly
      clientSecret: process.env.GOOGLE_SECRET ?? "",
      authorization: {
        params: {
          access_type: "offline",
          response_type: "code"
        } }// Ensure your Google Secret is set correctly
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET || "secret",

  callbacks: {
    async session({ session, token }: any) {
      if (token?.id) {
          session.user.id = token.id;
          session.user.email = token.email;
          session.user.name = token.name;
      }
      return session;
  },
    
  async jwt({ token, user, account, profile }: any) {
    if (account?.provider === "google" && profile) {
        const dbUser = await prisma.user.upsert({
            where: { email: profile.email },
            update: {}, // Add any necessary updates for existing users
            create: {
                name: profile.name || profile.email,
                email: profile.email,
                password: "", // Google users don't have passwords
                auth_type: "Google",
            },
        });

        token.id = dbUser.id; // Attach user ID to token
        token.email = dbUser.email;
        token.name = dbUser.name;
    } else if (user) {
        // For Credentials provider (user is directly passed from `authorize`)
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
    }

    return token;
},

    

    async redirect({ baseUrl }: any) {
      return baseUrl + "/wallet/dashboard"; 
    },


  },
};
