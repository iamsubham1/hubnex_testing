import React from 'react'
import Navbar from '../navbar/Navbar'
import MobileNavbar from '../navbar/MobileNavbar'

const Hero = () => {
  return (
    <div className=' h-screen bg-indusLander bg-cover bg-center w-full relative'>
        <Navbar />
        <MobileNavbar/>
    <div className=' h-full w-full flex items-center justify-center'>
        <div className=' w-[80%] flex items-center'>
            <div className=' text-white flex flex-col gap-10 w-90'>
                <span className=' text-5xl'>empowering <br/> healthcare with AI</span>
                <p className=' text-lg'>We help you realize intelligent, connected, and patient-centric healthcare.</p>
                <button className=' w-max py-2 px-5 bg-white text-black rounded-full'>contact us</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero