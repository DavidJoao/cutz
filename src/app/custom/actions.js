"use server"
import { signIn, auth} from "./auth";
import { AuthError } from "next-auth";

//LOG SESSION
export async function logSession() {
    const session = await auth()
    return session
}

// AUTHENTICATE USER LOGIN
export async function authenticate ( formData ) {
    try {
        await signIn('credentials', {
            email: formData.email,
            password: formData.password,
            redirect: false
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