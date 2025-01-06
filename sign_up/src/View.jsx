import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function View() {
    const navigate = useNavigate();


    const location = useLocation();
    const {viewData} = location.state;

    console.log(viewData);
    

    const handleClick = () => {
        navigate('/table')
    }
  return (
    <div className=' min-h-screen flex justify-center items-center rounded-lg shadow-lg text-white'>
        <div className=' backdrop-blur-sm bg-white/20 flex justify-center items-center  space-y-10  flex-col py-16 w-[25%] rounded-lg'>
        <h1 className='font-bold text-xl'>View Details</h1>

        <div className='space-y-4 '>
            <div className='flex gap-4 '><span className='font-mono' > <strong>First Name </strong> </span> <span>:</span> <span className='text font-thin'>{viewData.firstName}</span></div>
            <div className='flex gap-4 '><span className='font-mono' > <strong>Second Name</strong>  </span> <span>:</span> <span className='text font-thin'>{viewData.secondName}</span></div>
            <div className='flex gap-4 '><span className='font-mono' ><strong>Email</strong>   </span> <span>:</span> <span  className='text font-thin'>{viewData.email}</span></div>
            <div className='flex gap-4 '><span className='font-mono' ><strong>Password</strong>   </span> <span>:</span> <span className='text font-thin'>{viewData.password}</span></div>
            <div className='flex gap-4 '><span className='font-mono' > <strong>Mobile</strong>  </span> <span>:</span> <span className='text font-thin'>{viewData.mobileNumber}</span></div>
            <div className='flex gap-4 '><span className='font-mono' ><strong>Gender</strong>   </span> <span>:</span> <span className='text font-thin'>{viewData.gender}</span></div>
         
           
        </div>
        <button onClick={handleClick} className='bg-blue-500 text-white py-1 px-24 rounded ' >Back</button>
        </div>
    </div>
  )
}

export default View