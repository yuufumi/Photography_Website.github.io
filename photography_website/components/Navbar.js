import React, { useState } from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
  const [nav, setNav]= useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300 '>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>            
            <Link href="/"><h1 className='font-bold text-4xl '>Captur</h1></Link>
            <ul className='hidden sm:flex'>
                <Link href="/" className='p-4'><li>Home</li></Link>
                <Link href="/gallery"  className='p-4'><li>Gallery</li></Link>
                <Link href="/portfolio" className='p-4'><li>Work</li></Link>
                <Link href="/contact" className='p-4'><li>Contact</li></Link>
            </ul>
            {/* Mobile button */}
            <button className='block sm:hidden z-10' onClick={handleNav}>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
            </button>
            {/* Mobile menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-[-100%] left-0 right-0 bottom-0 flex justify-center items-center h-full  v-screen bg-black text-center ease-in duration-300'}>
                <ul>
                    <Link href="/"><li className='p-4 text-4xl hover:text-gray-500'>Home</li></Link>
                    <Link href="/gallery"><li className='p-4 text-4xl hover:text-gray-500'>Gallery</li></Link>
                    <Link href="/portfolio"><li className='p-4 text-4xl hover:text-gray-500'>Work</li></Link>
                    <Link href="/contact"><li className='p-4 text-4xl hover:text-gray-500'>Contact</li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
