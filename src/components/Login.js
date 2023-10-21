import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen bg-gray-100 text-gray-800 antialiased py-6 flex flex-col justify-center'>
        <div className='py-3 sm:w-96 mx-auto text-center'>
            <span className='text-2xl'>Login to your account</span>
            <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                <div className='h-2 bg-indigo-400 rounded-t-md'></div>
                <div className='px-8 py-6'>
                    
                    <label className='block font-semibold'>Username or Email</label>
                    <input type="text" placeholder="Username" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:ring-1 focus:ring-indigo-400
                     rounded-md "/>
                    <label className='block font-semibold mt-3'>Password</label>
                    <input type="password" placeholder="Password" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:ring-1 focus:ring-indigo-400
                     rounded-md "/>

                    <div className='flex justify-between items-baseline'>
                        <button type='submit' className='bg-indigo-500 text-white mt-4 py-1 px-4 rounded-md hover:bg-indigo-600'>Login</button>
                        <a href="#" className="text-sm hover:underline">Forgot Password?</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Login