// import React from 'react'

function Services() {

  return (
    <>
        <div id="services" className='bg-[#F5EFE7] text-[#3E5879] px-12 py-20 md:px-40 md:pt-28'>
        
            <h2 className='text-center text-5xl'>Services</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-14 sm:py-20 text-center'>
                <div className='p-3.5 card shadow-xl/30 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src='https://i.imgur.com/Fv9xSfR.jpg' alt='' className='w-5/6 object-contain rounded-md inline-block'/>
                    <h3 className='mt-1.5'>GENERAL CONSULTATION</h3>
                </div>
                <div className=' py-3.5 card shadow-xl/30 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src='https://i.imgur.com/CeS44vC.jpg' alt='' className='w-5/6  h-auto rounded-md inline-block'/>
                    <h3 className='mt-1.5'>TAX</h3>
                </div>
                <div className=' p-3.5 card shadow-xl/30 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src='https://i.imgur.com/8NLX8Mg.jpg' alt='' className='w-5/6  h-auto rounded-md inline-block'/>
                    <h3 className='mt-1.5'>Intellectual Property Consultation</h3>
                </div>
                <div className=' p-3.5 card shadow-xl/30 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src='https://i.imgur.com/8Nhg4gj.jpg' alt='' className='w-5/6  h-auto rounded-md inline-block'/>
                    <h3 className='mt-1.5'>Corporate Compliance Consultation</h3>
                </div>
                <div className=' p-3.5 card shadow-xl/30 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src='https://i.imgur.com/v7myfpa.jpg' alt='' className='w-5/6  h-auto rounded-md inline-block'/>
                    <h3 className='mt-1.5'>STARTUP CONSULTATION</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services