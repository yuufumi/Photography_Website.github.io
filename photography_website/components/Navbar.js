import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent') 
  const [textColor, setTextColor] = useState('white')

  useEffect(() => {
    const changeColor = () => {
        if(window.scrollY >= 90){
            setColor('#ffffff');
            setTextColor('#000000');
        }else{
            setColor('transparent');
            setTextColor('#ffffff');
        }
    }
    window.addEventListener('scroll', changeColor);


  },[])
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300 '>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>            
            <Link href="/">
                <h1 style={{color: `${textColor}`}} className='font-bold text-4xl '>Captur</h1>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                <Link href="/"  className='p-4'><li>Home</li></Link>
                <Link href="/#gallery"   className='p-4'><li>Gallery</li></Link>
                <Link href="/work" className='p-4'><li>Work</li></Link>
                <Link href="/contact"   className='p-4'><li>Contact</li></Link>
            </ul>
            {/* Mobile button */}
            <div className='block sm:hidden z-10' onClick={handleNav}>
                {nav ? <AiOutlineClose style={{color: `${textColor}`}} size={20}/> : <AiOutlineMenu style={{color: `${textColor}`}} size={20}/> }
            </div>
            {/* Mobile menu */}
            <div className={nav ? 'sm:hidden absolute fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-[-300%] left-0 right-0 bottom-0 flex justify-center items-center h-full  v-screen bg-black text-center ease-in duration-300'}>
                <ul>
                    <Link href="/"><li className='p-4 text-4xl hover:text-gray-500'>Home</li></Link>
                    <Link href="/#gallery"><li className='p-4 text-4xl hover:text-gray-500'>Gallery</li></Link>
                    <Link href="/work"><li className='p-4 text-4xl hover:text-gray-500'>Work</li></Link>
                    <Link href="/contact"><li className='p-4 text-4xl hover:text-gray-500'>Contact</li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
