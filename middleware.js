import { NextResponse } from "next/server";
import { auth } from "./src/app/custom/auth";

export default async function middleware (request) {
  const protectedRoutes = ['/dashboard'];
  const unprotectedRoutes = ['/', '/login', '/employee-signup', '/employer-signup']
    const session = await auth();

    const isProtectedRoute = protectedRoutes.some((prefix) =>
        request.nextUrl.pathname.startsWith(prefix)
    );

    console.log("Session: ", session);
    
    if (!session && isProtectedRoute) {
        const absoluteURL = new URL('/login', request.nextUrl.origin);
        console.log("Redirecting to: ", absoluteURL.toString());
        return NextResponse.redirect(absoluteURL.toString())
    }

    if (session && unprotectedRoutes.includes(request.nextUrl.pathname)) {
        const absoluteURL = new URL('/dashboard', request.nextUrl.origin);
        console.log("Redirecting to: ", absoluteURL.toString());
        return NextResponse.redirect(absoluteURL.toString())
    }
}
