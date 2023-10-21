import React from 'react'
import {FaPhoneAlt, FaMailBulk, FaFacebookSquare, FaTwitter, FaInstagramSquare, FaLinkedin} from "react-icons/fa"
import {FaLocationDot} from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="antialiased bg-gray-100">
           <div className='flex justify-center items-center w-full min-h-screen'>
              <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-6 space-y-16 bg-cyan-700 overflow-hidden w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
                <div className='flex flex-col justify-between space-y-8'>
                    <div>
                        <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                        <p className='mt-2 text-cyan-50 text-sm'>Lorem Ipsum  dolor sit amet. Mauris ultrices diam dui, sed condimentum est ultrices vel.</p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <div className='flex space-x-2 items-center'>
                            <FaPhoneAlt className='text-lg text-cyan-100'/>
                            <span className='text-lg text-cyan-100'>(+91) 434355466</span>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <FaMailBulk className='text-lg text-cyan-100'/>
                            <span className='text-lg text-cyan-100'>xyz@gmail.com</span>
                        </div>
                        <div className='flex space-x-2 items-center'>
                             <FaLocationDot className='text-lg text-cyan-100'/>
                             <span className='text-lg text-cyan-100'>234, xyz 203331</span>
                        </div>
                    </div>
                    <div className='flex space-x-3'>
                        <FaFacebookSquare/>
                        <FaTwitter/>
                        <FaInstagramSquare/>
                        <FaLinkedin/>
                    </div>
                </div>
                <div className='relative'>
                   <div className="absolute z-0 -right-28 -top-28 w-40 h-40 bg-teal-400 rounded-full"></div>
                   <div className="absolute z-0 -left-28 -bottom-20 w-40 h-40 bg-teal-400 rounded-full"></div>
                   <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-96'>
                    <form action="#">
                        <div className="my-2">
                            <label for="" className='text-sm font-semibold'>Your Name</label>
                            <input type="text" placeholder="Your Name" className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'/>
                        </div>
                        <div className="my-2">
                            <label for="" className='text-sm font-semibold'>Email Address</label>
                            <input type="email" placeholder="Email Address" className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'/>
                        </div>
                        <div className="my-2">
                            <label for="" className='text-sm font-semibold'>Message</label>
                            <textarea rows="4" type="text" placeholder="Message" className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-400'/>
                        </div>
                        <div className='flex justify-end my-4'>
                           <button className="bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send Message</button>
                        </div>
                    </form>
                   </div>
                </div>
                
              </div>
           </div>
    </div>
  )
}

export default Contact