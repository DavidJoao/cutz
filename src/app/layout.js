import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: "ManageIt",
  description: "Developed by David Sandoval",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
