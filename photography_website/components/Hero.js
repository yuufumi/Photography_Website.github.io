import React from 'react'

function Hero({heading, message}) {
  return (
    
    <div className='flex items-center justify-center h-screen mb-[10rem] bg-fixed bg-center bg-cover custom-img z-[2]'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70'/>
      <div className='p-5 text-white z-[2] mt-[-5rem] '>
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className='py-5 text-xl font-medium'>{message}</p>
        <button className='px-8 py-2 border-2 '>Book</button>
      </div>
    </div>
  )
}

export default Hero;
