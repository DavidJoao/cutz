import { db } from "@/app/custom/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
const bcrypt = require('bcrypt')

export const authOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
    
                if(!credentials?.email || !credentials?.password) {
                    return null
                }
    
                const existingUser = await db.client.findUnique({ where: { email: credentials.email } })
    
                if (!existingUser) return null;
    
                const passwordMatch = await bcrypt.compare(credentials.password, existingUser.password)
    
                if (!passwordMatch) return null
    
                return {
                    user: existingUser
                }
            }
            })
        ],
    callbacks: {
        async jwt({ token, user }) {
            console.log(token, user)
            if (user) {
                return {
                    ...token,
                    username: user.name
                }
            }
            return token
          },
          async session({ session, token }) {
            return {
                ...session, 
                user: {
                    ...session.user,
                    name: token.name
                }
            }
          }
    }
}