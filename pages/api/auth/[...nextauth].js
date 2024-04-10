import NextAuth from "next-auth/next";
import { authOptions } from "@/app/custom/auth";

const handler = NextAuth(authOptions)

export default handler;

export { handler as GET, handler as POST }