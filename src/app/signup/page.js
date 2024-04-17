'use client'
import React, { useState } from 'react'
import { useForm, getValues } from 'react-hook-form'

const Page = () => {

    const passwordCheck = {
        password: "",
        confirmPassword: ""
    }

    const [passwordObj, setPasswordObj] = useState(passwordCheck)

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

    const onSubmit = (data) => console.log(data)

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
    </div>
  )
}

export default Page