'use client'
import React, { useState } from 'react'
import { MenuIcon } from '../custom/icons'
import { logoutUser } from '../custom/actions'
import { useRouter } from 'next/navigation'

const Navbar = ( {session} ) => {

    const [menu, setMenu] = useState(false)
    const router = useRouter()

    const navigate = async (route) => {
        setMenu(!menu)
        router.push(`${route}`)
    }

  return (
    <div className='bg-black p-3 text-white flex flex-col md:flex-row items-center justify-between'>
        <p>{session?.user?.name}</p>
        <button className='border-[1px] border-white w-[300px] flex items-center justify-center p-1 rounded' onClick={() => setMenu(!menu)}>
            <MenuIcon />
        </button>
        <div className={`${menu === false ? 'hidden' : 'block flex flex-col items-center md:fixed md:top-[6%] md:right-[1%]'} bg-black text-white z-10 w-[300px] rounded p-2 gap-2`}>
            { session?.user?.role === 'admin' ?
            <>
                <button className='nav-button' onClick={() => navigate('/dashboard')}>Dashboard</button>
                <button className='nav-button' onClick={() => navigate('/pages/employee-settings')}>Employee Settings</button>
                <button className='nav-button' onClick={() => navigate('/manage-equipment')}>Manage Equipment</button>
                <button className='nav-button' onClick={() => navigate('/post')}>Post</button>
                <button className='nav-button' onClick={() => navigate('/absence-request')}>Absence Request</button>
                <button className='nav-button' onClick={() => navigate('/create-timesheet')}>Create Timesheet</button>
                <button className='nav-button' onClick={() => navigate('/timesheets')}>Timesheets</button>
                <button className='nav-button' onClick={() => navigate('/create-report')}>Create Daily Report</button>
                <button className='nav-button' onClick={() => navigate('/daily-reports')}>Daily Reports</button>
                <button className='nav-button' onClick={() => navigate('/report-equipment')}>Report Equipment</button>
                <button className='nav-button' onClick={() => navigate('/upload')}>Upload Docs/Images</button>
                <button className='nav-button' onClick={() => navigate('/incident-report')}>Incident Report</button>
                <button className='nav-button' onClick={() => logoutUser()}>Logout</button>
            </>
            :
            <>
                <button className='nav-button' onClick={() => navigate('/dashboard')}>Dashboard</button>
                <button className='nav-button' onClick={() => navigate('/absence-request')}>Absence Request</button>
                <button className='nav-button' onClick={() => navigate('/create-timesheet')}>Create Timesheet</button>
                <button className='nav-button' onClick={() => navigate('/create-report')}>Create Daily Report</button>
                <button className='nav-button' onClick={() => navigate('/report-equipment')}>Report Equipment</button>
                <button className='nav-button' onClick={() => navigate('/upload')}>Upload Docs/Images</button>
                <button className='nav-button' onClick={() => navigate('/incident-report')}>Incident Report</button>
                <button className='nav-button' onClick={() => logoutUser()}>Logout</button>
            </>
            }
        </div>
    </div>
  )
}

export default Navbar