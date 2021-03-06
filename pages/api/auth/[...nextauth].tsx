import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import prisma from "../../../lib/prisma";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: 465,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_OAUTH,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET,
    }),
  ],
  pages: {
    error: "/auth/error", // Error code passed in query string as ?error=
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
});
