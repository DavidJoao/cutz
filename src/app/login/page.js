'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { authenticate, logSession } from '../custom/actions'

const Login = () => {

  const initialFormData = {
    email: '',
    password: ''
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleChanges = (e) => {
    const { value, name } = e.target;
    setFormData({ 
      ...formData,
      [name]: value
    })
  }


  return (
    <div className='w-full h-screen bg-black flex flex-col items-center justify-center text-white'>
      <h1 className="text-center font-bold text-5xl">Manage It</h1>
      <form className="flex flex-col gap-5 mt-4" action={() => authenticate(formData)}>
        <input name='email' placeholder='Email' className='input' onChange={handleChanges}/> 
        <input name='password' placeholder='********' type='password' className='input' onChange={handleChanges}/>
        <input type='submit' className='primary-button' value={"Log In"}/>
      </form>
      <Link href={"/"} className="text-white mt-3">Don't have an account? Sign Up!</Link>
      <button onClick={() => {
        logSession().then(res => console.log(res))
      }}>Click</button>
      <button onClick={() => {
        logoutUser().then(res => console.log(res))
      }}>Click</button>
    </div>
  )
}

export default Login