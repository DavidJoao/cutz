"use server"
import { signIn, signOut, auth} from "./auth";
import { AuthError } from "next-auth";

//LOG SESSION
export async function logSession() {
    const session = await auth()
    return session
}

// LOGOUT USER
export async function logoutUser(){
    await signOut({ redirect: true, redirectTo: '/login' })
    const session = await auth()
    return session
}

// AUTHENTICATE USER LOGIN
export async function authenticate ( e, formData ) {
    e.preventDefault();
    
    try {
        await signIn('credentials', {
            email: formData.email,
            password: formData.password,
            redirect: true,
            redirectTo: '/dashboard'
          })
    } catch (error) {
        if (error) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid Credentials';
                default:
                    return 'Something Went Wrong'
            }
        }
        throw error;
    }
}