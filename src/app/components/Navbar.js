'use client'
import React, { useState } from 'react'
import { MenuIcon } from '../custom/icons'

const Navbar = ( {session} ) => {
    const [menu, setMenu] = useState(false)
  return (
    <div className='bg-black p-5 text-white flex flex-col md:flex-row items-center justify-between'>
        <p>{session?.user?.name}</p>
        <button className='border-[1px] border-white w-[300px] flex items-center justify-center p-1 rounded' onClick={() => setMenu(!menu)}>
            <MenuIcon />
        </button>
        <div className={`${menu === false ? 'hidden' : 'block flex flex-col items-center md:fixed md:top-[8%] md:right-[1%]'} bg-black text-white z-10 w-[300px] rounded p-2 gap-2`}>
            <p>Option</p>
            <p>Option</p>
            <p>Option</p>
            <p>Option</p>
            <p>Option</p>
            <p>Option</p>
        </div>
    </div>
  )
}

export default Navbar