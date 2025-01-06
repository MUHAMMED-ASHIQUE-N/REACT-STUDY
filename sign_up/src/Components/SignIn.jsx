import React from 'react';

function SignIn() {
  
  return (
    <div className=' flex items-center flex-col justify-center h-[90vh] text-white'>
      <div>
        <h1 className='font-semibold text-2xl py-10'>Sign in</h1>
      </div>
      <form action="" className='w-96'>
        
        <div>
          
        </div>
        <div className='flex flex-col gap-5 pb-5' >
          <input type="text" placeholder="Email or username" className=' py-2 rounded-full pl-5 pr-5 text- outline-none bg-white bg-opacity-20 placeholder-white placeholder:opacity-80 ' />
          <input type="password" placeholder="Password" className='py-2 rounded-full pl-5 pr-5 text- outline-none bg-white bg-opacity-20 placeholder-white placeholder:opacity-80 ' />
        </div>
        <div className='w-full'><button className='w-full  text-black font-medium py-2 rounded-full pl-5 pr-5 text- outline-none bg-white bg-opacity-80 ' >Register </button></div>
            <div className='flex justify-between items-center py-2'>
              <div className='flex  items-center'> <input type="checkbox" name="" id=""  /> <label htmlFor="" className='opacity-80 px-1'>Remember me</label></div> 
              <div><span className='opacity-80'> Forgot password?</span></div>
            </div>
      </form>
    </div>
  );
}

export default SignIn;
