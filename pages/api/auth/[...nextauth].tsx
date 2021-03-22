import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER, 
      from: process.env.EMAIL_FROM
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
});

