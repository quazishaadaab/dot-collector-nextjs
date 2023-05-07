// import GoogleProvider from "next-auth/providers/google";

// import NextAuth from "next-auth"

// export default NextAuth({
//   // Configure one or more authentication providers
// //   problem with the .env.local file
//   providers: [
//     GoogleProvider({
//       clientId: `345433280881-t1blvfjsg7rjsq7corcbevgu0eplbg5r.apps.googleusercontent.com` ,
//       clientSecret: `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`
//     })
//   ],
//       // secret: process.env.NEXTAUTH_SECRET

//       callbacks: {
//         async jwt({ token }) {
//           token.userRole = "admin"
//           return token
//         },
//       },

// })s

import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"


// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
      clientId: `345433280881-t1blvfjsg7rjsq7corcbevgu0eplbg5r.apps.googleusercontent.com`,
      clientSecret: `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`,
    })
  ],
  secret:process.env.NEXT_PUBLIC_SECRET
  // callbacks: {
  //   async jwt({ token }) {
  //     token.userRole = "admin"
  //     return token
  //   },
  // },
}

export default NextAuth(authOptions)
