'use client'
import React from 'react'
import { useForm, getValues } from 'react-hook-form'
import Link from 'next/link'

const Login = () => {

  const { 
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
} = useForm();

  const onSubmit = (data) => console.log(data)

  return (
    <div className='w-full h-screen bg-black flex flex-col items-center justify-center text-white'>
      <h1 className="text-center font-bold text-5xl">Cutz</h1>
      <form className="flex flex-col gap-5 mt-4" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Email' className='input' {...register("email")}/> 
        <input placeholder='********' type='password' className='input' {...register("password")}/>
        <input type='submit' className='primary-button' value={"Log In"}/>
      </form>
      <Link href={"/signup"} className="text-white mt-3">Don't have an account? Sign Up!</Link>
    </div>
  )
}

export default Login