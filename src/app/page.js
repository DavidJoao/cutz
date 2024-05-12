'use client'
import Image from "next/image";
import axios from 'axios'
import {colors} from "./custom/colors";
import Link from 'next/link'

export default function Home() {

  const initialUser = {

  }

  const handleChange = () => {

  }

  return (
    <main className="border-[1px] border-black h-screen w-screen flex flex-col items-center p-3 md:p-10 bg-black">
      <div className={`border-[1px] border-black w-[100%] md:w-[50%] h-[95%] md:h-auto p-3 text-white rounded`}>
        <h1 className="text-center font-bold text-5xl">Manage It</h1>
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-xl">Ready to make things easier?</h2>
          <Link href={'/login'} className="primary-button">Log In</Link>
          <p>Or</p>
          <div className="flex gap-2">
            <Link href={'/employee-signup'} className="primary-button">Sign Up As Employee</Link>
            <Link href={'/employer-signup'} className="primary-button">Sign Up As Employer</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
