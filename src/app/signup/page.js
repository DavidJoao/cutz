'use client'
import React, { useState } from 'react'
import { useForm, getValues } from 'react-hook-form'
import Link from 'next/link'
import axios from 'axios'


const Page = () => {

    const passwordCheck = {
        password: "",
        confirmPassword: ""
    }

    const [passwordObj, setPasswordObj] = useState(passwordCheck)
    const [errorMessage, setErrorMessage] = useState('')
    const [loginButton, setLoginButton] = useState(false)

    const { 
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },
    } = useForm();

    const handleChange = (e) => {
        const { value, name } = e.target
        setPasswordObj({
            ...passwordObj,
            [name] : value
        })
    }

    const onSubmit = (data) => {

        setErrorMessage('')

        axios.post('/api/signup', data, { headers: { 'Content-Type': 'application/json' } })
            .then(res => console.log(res))
            .catch(err => {
                setErrorMessage(err?.response?.data?.error)
            })
    }

  return (
    <div className='w-full h-screen bg-black flex flex-col items-center justify-center'>
        <h1 className="text-center font-bold text-5xl text-white mb-5">Cutz</h1>
        <form className="flex flex-col gap-3 text-white" onSubmit={handleSubmit(onSubmit)}>
            <input className='input w-[340px]' required placeholder="First Name" {...register("firstName")}/>
            <input className='input w-[340px]' required placeholder="Second Name" {...register("secondName")}/>
            <label>Date of Birth:</label>
            <input className='input w-[340px]' required placeholder="Date of Birth:" type="date" {...register("dob")}/>
            <input className='input w-[340px]' required placeholder="Email" {...register("email")}/>
            <input className='input w-[340px]' required name="password" type="password" placeholder="Password" {...register("password")} onChange={handleChange}/>
            <input className='input w-[340px]' required name="confirmPassword" type="password" placeholder="Confirm Password" {...register("confirmPassword")} onChange={handleChange}/>
            <input className='input w-[340px]' required type="number" placeholder="Phone" {...register("phone")}/>
            { passwordObj.password === passwordObj.confirmPassword ? ( <input value={"Register"} type='submit' className='primary-button' /> ) : ( <></> )}
        </form>
        { errorMessage !== "" ? ( <p className='m-3 text-[#db0f00]'>{errorMessage}</p> ) : ( <></> ) }
        { loginButton === true ? ( <Link href={"/login"} className='primary-button'>Account Created Successfully, Log In Here!</Link> ) : ( <></> ) }
        <Link href={"/login"} className="text-white mt-3">Already have an account? Log In</Link>
    </div>
  )
}

export default Page