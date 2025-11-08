// import React from 'react'
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-[#213555] bg-opacity-95 text-[#F5EFE7] sm:px-20'>

        <div className='flex flex-row'>

          <div className='basis-1/3 sm:pt-20 pt-10 px-2'>
            <p className='font-bold text-xl text-center'>Your trusted partner in Legal Excellence</p>
          </div>

          <div className='basis-1/3 text-center pt-10'>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>

          <div className='basis-1/3 pt-10 sm:pt-20 px-2'>
            <div className='flex flex-row text-3xl'>
              <div className='basis-1/3'><FaLinkedin /></div>
              <div className='basis-1/3'><FaFacebookSquare /></div>
              <div className='basis-1/3'><FaInstagramSquare /></div>
            </div>
            <br />
            <button className='bg-[#F5EFE7] text-[#213555] px-5 sm:px-10 py-2 rounded-md'>Book a free consultation</button>
          </div>

        </div>

        <div className='pt-20 px-3'>
          <p>Disclaimer</p>
          <p>Privacy Policy</p>
          <p>Terms of Service/Cookie Policy</p>
        </div>

        <div className='text-center py-20'>
          <p>© 2025 Sougat Chowdhury. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer