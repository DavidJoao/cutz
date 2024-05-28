'use client'
import EmployeeSmallCard from '@/app/components/EmployeeSmallCard'
import { logSession } from '@/app/custom/actions'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EmployeeSettings = () => {

  const [employees, setEmployees] = useState('')
    
    useEffect(() => {
      logSession()
      .then(res => {
        axios.get(`/api/employees/${res?.user?.employer_id}`)
        .then(res => {
          console.log(res?.data?.allEmployees)
          setEmployees(res?.data?.allEmployees)
        })
        .catch(err => console.log(err))
      })
    }, [])

  return (
    <div className="main-screen">
        <div className='border w-full md:w-[90%] h-full md:h-[80%] rounded p-2'>
            { employees ? 
              employees && employees.map((employee, index) => {
                return (
                  <EmployeeSmallCard key={index} employee={employee} />
                )
              }) 
            :
            <p>No employees</p> }
        </div>
    </div>
  )
}

export default EmployeeSettings