import GoogleProvider from "next-auth/providers/google";

import NextAuth from "next-auth"

export default NextAuth({
  // Configure one or more authentication providers
//   problem with the .env.local file
  providers: [
    GoogleProvider({
      clientId: `176309719056-rr2qb5ifakhgcs8eqbtc11fiqph82mn9.apps.googleusercontent.com` ,
      clientSecret: `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`
    })
  ],
      secret: 'IamVeryHandsome' 

})