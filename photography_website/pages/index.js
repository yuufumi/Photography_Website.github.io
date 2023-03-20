import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero heading='Captur Photography' message='I capture moments in nature and keep them alive.'  />
    </>
  )
}
