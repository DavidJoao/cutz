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
        {/* WELCOME PAGE - DIRECT TO LOGIN PAGE | IGNORE CODE BELOW FOR NOW */}


        {/* <form className="flex flex-col gap-3 text-white">
          <input name="firstName" placeholder="First Name" />
          <input name="secondName" placeholder="Second Name"/>
          <label>Date of Birth:</label>
          <input name="dob" placeholder="Date of Birth:" type="date" className="text-black"/>
          <input name="email" placeholder="Email"/>
          <input name="password" type="password" placeholder="Password"/>
          <input type="password" placeholder="Confirm Password"/>
          <input name="phone" type="number" placeholder="Phone"/>
        </form> */}
        <h1 className="text-center font-bold text-5xl">Cutz</h1>
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-xl">Ready for your next appointment?</h2>
          <Link href={'/login'} className="primary-button">Log In</Link>
          <p>Or</p>
          <Link href={'/signup'} className="primary-button">Sign Up</Link>
        </div>
      </div>
    </main>
  );
}
