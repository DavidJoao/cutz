'use client'
import React from 'react'
import { logoutUser } from '../custom/actions'

const Page = () => {
  return (
    <div>Dashboard
          <button onClick={() => logoutUser()}>Logout</button>
    </div>

  )
}

export default Page