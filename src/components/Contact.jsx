// import React from 'react'

function Contact() {
  return (
    <>
      <div id='contact' className='flex flex-row bg-[#F5EFE7] text-[#3E5879] px-12 py-12 lg:py-20 sm:px-40 justify-center items-center'>
        <div>
          <h2 className='text-center text-5xl'>Contact Me</h2>

          <div className='py-14'>

            <form className='space-y-4'>

              <div>
                <label htmlFor='name' className='block text-[#3E5879] text-2xl'>Name</label>
                <input type='text' id='name' name='name' required className='w-full mt-2 p-1 rounded-md text-[#3E5879] border-2 border-[#3E5879] shadow-xl' />
              </div>
              <div>
                <label htmlFor='email' className='block text-[#3E5879] text-2xl'>Email</label>
                <input type='email' id='email' name='email' required className='w-full mt-2 p-1 rounded-md text-[#3E5879] border-2 border-[#3E5879] shadow-xl' />
              </div>
              <div>
                <label htmlFor='phone' className='block text-[#3E5879] text-2xl'>Phone</label>
                <input id='phone' name='phone' type='tel' required className='w-full mt-2 p-1 rounded-md text-[#3E5879] border-2 border-[#3E5879] shadow-xl' />
              </div>
              <div>
                <label htmlFor='message' className='block text-[#3E5879] text-2xl'>Message</label>
                <textarea id='message' name='message' required className='w-full mt-2 p-1 rounded-md text-[#3E5879] border-2 border-[#3E5879] shadow-xl'></textarea>
              </div>
              <div>
                <button type='submit' className='bg-[#3E5879] text-[#F5EFE7] rounded-lg py-2 px-4'>Send Message</button>
              </div>
            </form>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 py-14 px-8 text-center bg-[#3E5879] text-[#F5EFE7]'>
            <div className='px-2 py-2'>
              <p>Email : abc@email.com</p>
            </div>
            <div className='px-2 py-2'>
              <p>Office : 0657-2300301</p>
            </div>
            <div className='px-2 py-2'>
              <p>Mobile : +91-8235278909</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact