import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Sidebar = () => {
  const [menu, toggleMenu] = useState(true);
  console.log(menu);

  const UpdateMenu = () =>{
       if(menu){
        toggleMenu(false);
       }
       else{
        toggleMenu(true);
       }
  } 

  return (
    <div className='antialiased bg-indigo-200 min-h-screen relative lg:flex'>
      {menu?<nav className='absolute lg:relative z-10 w-64 bg-indigo-500 h-screen text-white p-4'>
            <div className='flex justify-between items-baseline'>
              <span className='text-2xl sm:text-3xl font-bold p-2'>Sidebar</span>
              <button onClick={UpdateMenu}
                className='p-2 focus:outline-none focus:bg-indigo-700 hover:bg-indigo-700 rounded-lg'>Back</button>
            </div>
            <ul className='mt-8'>
              <li><a href="#" className='px-2 py-2 block hover:bg-indigo-800 rounded-md'>Home</a></li>
              <li><a href="#" className='px-2 py-2 block hover:bg-indigo-800 rounded-md'>About Us</a></li>
              <li><a href="#" className='px-2 py-2 block hover:bg-indigo-800 rounded-md'>Contact Us</a></li>
              <li><a href="#" className='px-2 py-2 block hover:bg-indigo-800 rounded-md'>Help</a></li>
              <li><a href="#" className='px-2 py-2 block hover:bg-indigo-800 rounded-md'>FAQs</a></li>
            </ul>
        </nav>:null
      }
       <header className="flex bg-gray-600 relative z-0 lg:flex-grow self-start items-baseline">
           {!menu?<button className='p-2 focus:outline-none focus:bg-gray-700 hover:bg-gray-700 
              rounded-lg text-white font-semibold' onClick={UpdateMenu}>
               <GiHamburgerMenu className='text-2xl'/>
           </button>:null}
           <span className='block text-2xl sm:text-3xl p-3 font-bold text-white'>React.js Sidebar</span>
       </header>
    </div>
  )
}

export default Sidebar