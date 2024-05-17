'use client'
import React, { useEffect } from 'react'
import { useForm, getValues } from 'react-hook-form'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { navigate } from '../custom/redirect'

const Login = async () => {

  const { 
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
} = useForm();

  const onSubmit = async (data) => {

      const signInData = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      })

      if (signInData?.ok === false) {
        console.error(signInData.error)
        // setMessage('Incorrect password or email')
      } else {
        console.log('Logged In Successfully')
        console.log(signInData)
        // router.push('/dashboard')
        // router.refresh();
      }
      
  }

  return (
    <div className='w-full h-screen bg-black flex flex-col items-center justify-center text-white'>
      <h1 className="text-center font-bold text-5xl">Manage It</h1>
      <form className="flex flex-col gap-5 mt-4" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Email' className='input' {...register("email")}/> 
        <input placeholder='********' type='password' className='input' {...register("password")}/>
        <input type='submit' className='primary-button' value={"Log In"}/>
      </form>
      <Link href={"/"} className="text-white mt-3">Don't have an account? Sign Up!</Link>
    </div>
  )
}

export default Login