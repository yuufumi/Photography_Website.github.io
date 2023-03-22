import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import {SliderData} from '../components/SliderData'
const inter = Inter({ subsets: ['latin'] })
import Instagram from '../components/Instagram';
export default function Home() {
  return (
    <>
    <Hero heading='Captur Photography' message='I capture moments in nature and keep them alive.'  />
    <Slider slides={SliderData}/>
    <Instagram />
    </>
  )
}
