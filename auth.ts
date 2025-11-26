import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Only allow specific email(s) to sign in
      const allowedEmails = process.env.ADMIN_EMAILS?.split(",").map(e => e.trim()) || []
      
      if (user.email && allowedEmails.includes(user.email)) {
        return true
      }
      
      // Deny access for other users
      return false
    },
    async jwt({ token, user }) {
      // Add user info to token on sign in
      if (user) {
        token.email = user.email
        token.name = user.name
        token.picture = user.image
      }
      return token
    },
    async session({ session, token }) {
      // Add token info to session
      if (session.user) {
        session.user.email = token.email as string
        session.user.name = token.name as string
        session.user.image = token.picture as string
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
})
