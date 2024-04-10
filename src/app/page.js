'use client'
import Image from "next/image";
import axios from 'axios'
import {colors} from "./custom/colors";

export default function Home() {

  const initialUser = {

  }

  const handleChange = () => {

  }

  return (
    <main className="border-[1px] border-black h-screen w-screen flex flex-col items-center p-3 md:p-10 bg-black">
      <div className={`border-[1px] border-black w-[100%] md:w-[50%] h-[95%] md:h-auto p-3 bg-[#262626]`}>
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
      </div>
    </main>
  );
}
