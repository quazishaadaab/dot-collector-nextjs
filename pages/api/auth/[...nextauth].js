import GoogleProvider from "next-auth/providers/google";

import NextAuth from "next-auth"
import process from "process";

export default NextAuth({
  // Configure one or more authentication providers
//   problem with the .env.local file
  providers: [
    GoogleProvider({
      clientId: `345433280881-t1blvfjsg7rjsq7corcbevgu0eplbg5r.apps.googleusercontent.com` ,
      clientSecret: `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`
    })
  ],
      secret:process.env.NEXTAUTH_SECRET 

})