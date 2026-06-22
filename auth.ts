import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    pages: {
    signIn: "/login",
},
trustHost: true,
secret: process.env.NEXTAUTH_SECRET,
providers: [
    CredentialsProvider({
        name: 'credentials',