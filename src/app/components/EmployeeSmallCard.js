import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { colors } from '@/app/custom/colors'

const EmployeeSmallCard = ( {employee} ) => {

    const [settings, setSettings] = useState(false)
    const [formStatus, setFormStatus] = useState(false)

    const initialForm = {
        email: employee.email,
        phone: employee.phone,
        role: employee.role
    }

    const [newForm, setNewForm] = useState(initialForm)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <>
        <Modal show={settings} onHide={() => setSettings(!settings)} className='text-white'>
            <Modal.Header className={`bg-slate-700 font-bold`} closeVariant='white' closeButton>{employee?.name} Settings</Modal.Header>
            <Modal.Body className='bg-slate-700 flex flex-col items-center justify-center'>
                <p className='text-center'>Main Information</p>
                <div className='w-full h-full flex grid grid-cols-1 md:grid-cols-2'>
                    <p className='font-bold'>Email:</p>
                    <p>{employee.email}</p>
                    <p className='font-bold'>Role:</p>
                    <p>{employee.role}</p>
                    <p className='font-bold'>Phone:</p>
                    <p>{employee.phone}</p>
                    <p className='font-bold'>Current Jobsite:</p>
                    <p>{employee.jobsite || 'Not Assigned'}</p>
                </div>
                <button className='hover:bg-slate-100/20 border rounded p-1 mt-3' onClick={() => setFormStatus(!formStatus)}>Edit Employee</button>
                <form className={formStatus === true ? `block w-full h-full flex grid grid-cols-1 md:grid-cols-2 gap-2 mt-3` : `hidden`} onSubmit={handleSubmit}>
                    <p className='font-bold'>Email:</p>
                    <input name='email' value={newForm.email} className='input' onChange={handleChange}/>
                    <p className='font-bold'>Role:</p>
                    <select name='role' value={newForm.role} className='input' onChange={handleChange}>
                        <option>employee</option>
                        <option>admin</option>
                        <option>moderator</option>
                    </select>
                    <p className='font-bold'>Phone:</p>
                    <input name='phone' value={newForm.phone} className='input' onChange={handleChange}/>
                    <button className='col-span-2 mt-2 bg-red-700 hover:bg-red-700/60 border rounded p-1' type='submit'>UPDATE USER</button>
                </form>
            </Modal.Body>
            <Modal.Footer className='bg-slate-700 flex items-center justify-center'>
                <button className='border rounded p-1 hover:bg-slate-100/20' onClick={() => setSettings(!settings)}>- Close Settings -</button>
            </Modal.Footer>
        </Modal>
        <button className='border rounded p-1 w-[170px]' onClick={() => setSettings(!settings)}>{employee.name}</button>
    </>
  )
}

export default EmployeeSmallCard