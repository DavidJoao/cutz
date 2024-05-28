import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";
import Navbar from "./components/Navbar";
import { auth } from "./custom/auth";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ManageIt",
  description: "Developed by David Sandoval",
};

export default async function RootLayout({ children }) {

  const session = await auth()

  return (
    <html lang="en" >
      <body suppressHydrationWarning={true}>
        <Provider>
          { session && session ? <Navbar session={session} /> : <></> }
          {children}
        </Provider>
      </body>
    </html>
  );
}
