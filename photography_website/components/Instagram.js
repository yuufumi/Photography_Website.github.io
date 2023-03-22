import React from 'react'
import InstagramImg from './InstagramImg'

import image1 from '../public/image1.jpg';
import image2 from '../public/image2.jpg';
import image3 from '../public/image3.jpg';
import image4 from '../public/image4.jpg';
import image5 from '../public/image5.jpg';

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Follow me on Instagram</p>
      <p className='text-2xl font-semibold'>@Captur</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <InstagramImg socialImg={image1}/>
        <InstagramImg socialImg={image2}/>
        <InstagramImg socialImg={image3}/>
        <InstagramImg socialImg={image4}/>
        <InstagramImg socialImg={image5}/>
      </div>
    </div>
  )
}
export default Instagram
