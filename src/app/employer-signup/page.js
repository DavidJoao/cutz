'use client'
import React, { useEffect, useState } from 'react'
import { useForm, getValues } from 'react-hook-form'
import Link from 'next/link'
import { registerEmployer } from '@/app/custom/registerFunctions';
import { navigate } from '../custom/redirect';


const EmployerSignup = () => {

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
        reset,
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

        registerEmployer(data)
        .then(res => {
            if (res.error) {
                setErrorMessage(res.msg)
            } else {
                reset()
                navigate('login')
            }
        })
        .catch(err => setErrorMessage(err))
    }

  return (
    <div className='w-full h-screen bg-black flex flex-col items-center justify-center'>
        <h1 className="text-center font-bold text-5xl text-white mb-5">Manage It</h1>
        <form className="flex flex-col gap-3 text-white" onSubmit={handleSubmit(onSubmit)}>
            <input className='input w-[340px]' required placeholder="Company Name" {...register("name")}/>
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

export default EmployerSignup