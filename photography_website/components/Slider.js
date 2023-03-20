import React, {useState} from 'react'
import { SliderData } from './SliderData'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Image from 'next/image'
const Slider = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div id="gallery" className='max-w-[1440px] mx-auto'>
      <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
      <div>
      <div className='relative flex justify-center p-4'>
        {SliderData.map((slide, index) => {
            return (
            
            <div key={index}>
                <FaArrowCircleLeft onClick={previousSlide} size={50} className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'/>
                <div className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
                {current === index ?(
                     <Image 
                     src= {slide.image}
                     alt='/'
                     width='1440'
                     height='200'
                     className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}/>
                ): null
                }
                </div>
                <FaArrowCircleRight onClick={nextSlide} size={50} className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'/>
            </div>
            )
        })}
        </div>
      </div>
    </div>
  )
}

export default Slider
