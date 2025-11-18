import React from 'react'
import Navbar from '../Shared/Navbar'
import Hero from './Hero'
import OurServices from './OurServices'
import HowItWorks from './HowItWorks'
import OurWork from './OurWork'
import SignupBanner from '../Shared/SignupBanner'
import logo from "../assets/logo.jpg"
import { MdMail } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { BiPhone } from 'react-icons/bi'
import Divider from '../Components/Divider'

const LandingPage = () => {
  return (
   <>
    <div className='h-screen overflow-y-auto w-full relative font-serif'>
      <Navbar />
      <div className="flex flex-col max-w-full overflow-hidden">
        <Hero />
        <OurServices />
        <HowItWorks />
        <OurWork />
        <SignupBanner />

        <div className='w-full p-10 pb-20 px-20 bg-amber-800 font-sans flex flex-col gap-10 shadow-sm shadow-zinc-300'>
          <div className='grid grid-cols-4 gap-10'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-end gap-2  '>
                <img src={logo} className='w-16'/>
                <p className='text-white'>Knots and Prints</p>

              </div>
              <p className='text-zinc-300 text-sm w-60'>Simple DTF printing, and custom apparel</p>
            </div>
            <div className='flex flex-col gap-2 text-white font-sans'>
              <p className='font-semibold'>Services</p>
              <p className='font-extralight text-sm'>DTF Printing</p>
              <p className='font-extralight text-sm'>Custom Apparel</p>
              <p className='font-extralight text-sm'>Gang sheet builder</p>
            </div>
            <div className='flex flex-col gap-2 text-white font-sans'>
              <p className='font-semibold'>Company</p>
              <p className='font-extralight text-sm'>Privacy Policy</p>
              <p className='font-extralight text-sm'>About Us</p>
              <p className='font-extralight text-sm'>Help</p>
            </div>

            <div className='flex flex-col gap-2 text-white font-sans'>
              <p className='font-semibold'>Contact</p>
              <div className='flex items-center gap-2'>
                <MdMail />
                <p className='font-extralight text-sm'>knotsandprints@gmail.com</p>
              </div>
              <div className='flex items-center gap-2'>
                <BsInstagram />
                <p className='font-extralight text-sm'>@knotsandprintsco</p>
              </div>
              <div className='flex items-center gap-2'>

                <BiPhone />
                <p className='font-extralight text-sm'>5555555555</p>
              </div>
            </div>

          </div>
          <div className='h-[.5px] bg-amber-700 w-full'></div>
          <div className='flex justify-center items-center'>
            <p className='text-zinc-300 text-sm font-light'>© 2025 Knots and Prints. All rights reserved.</p>
          </div>
        </div>
      </div>
      
    </div>
   </>
  )
}

export default LandingPage
