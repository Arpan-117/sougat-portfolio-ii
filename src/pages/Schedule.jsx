import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import {motion as m, easeInOut} from 'motion/react'
import { container, item2 } from '../customJs/AnimationContext'

function Schedule() {

  useEffect(()=>{
        if("scrollRestoration" in window.history){
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0,0);
    },[]);

    const [date, setDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
            <m.div id='contact' className='flex flex-row bg-[#F5EFE7] text-[#3E5879] md:h-screen px-16 md:px-36 justify-center items-center'
            initial={{y:'85%'}} animate={{y: '0%', transition:{duration: 0.55, ease: "easeInOut"}}} exit={{opacity:0, y:'-80%', transition: { duration: 0.45, ease: easeInOut }}}>
                <div className='pb-8'>
                    <div className="scheDuleTitle overflow-hidden">
                        <m.h2 className='text-center text-5xl'
                        initial={{y:'85%'}} animate={{y: '0%', transition:{duration: 0.55, delay:0.3, ease: "easeInOut"}}} exit={{opacity:0, y:'-80%', transition: { duration: 0.45, ease: easeInOut }}}>Schedule a Consultation</m.h2>
                    </div>

                    <div className='py-14'>

                        <m.form className='space-y-4' variants={container} initial='hidden' animate='show' exit='exit'>

                            <div className='overflow-hidden'>
                                <m.label htmlFor='name' className='block text-[#3E5879] text-2xl' variants={item2}>Name</m.label>
                                <input type='text' id='name' name='name' required className='w-full mt-2 py-2 px-4 rounded text-[#3E5879] border bg-white shadow' />
                            </div>

                            <div className='overflow-hidden'>
                                <m.label htmlFor='phone' className='block text-[#3E5879] text-2xl' variants={item2}>Contact Number</m.label>
                                <input id='phone' name='phone' type='tel' required className='w-full mt-2 py-2 px-4 rounded text-[#3E5879] border bg-white shadow' />
                            </div>

                            <div className='overflow-hidden'>
                                <m.label htmlFor='message' variants={item2}className='block text-[#3E5879] text-2xl'>Query in short</m.label>
                                <textarea id='message' name='message' required className='w-full mt-2 py-2 px-4 rounded text-[#3E5879] border bg-white shadow'></textarea>
                            </div>

                            <div>
                                <div
                                    onClick={() => setShowCalendar(!showCalendar)}
                                    className="border px-4 py-2 rounded bg-white shadow"
                                >
                                    {date ? format(date, "PPP") : "Select a date"}
                                </div>
                                {showCalendar && (
                                    <div className="bg-white border shadow p-2 inline-block">
                                        <input
                                            type="date"
                                            onChange={(e) => {
                                                setDate(new Date(e.target.value));
                                                setShowCalendar(false);
                                            }}
                                            className="border p-2 rounded"
                                        />
                                    </div>
                                )}

                            </div>

                            <div>
                                <button type='submit' className='bg-[#3E5879] text-[#F5EFE7] rounded-lg py-2 px-4'>Send Message</button>
                            </div>
                        </m.form>

                    </div>

                    <div className='grid grid-cols-3 py-14 px-8 text-center bg-[#3E5879] text-[#F5EFE7]'>
                        <div className='px-2'>
                            <p>Email : abc@email.com</p>
                        </div>
                        <div className='px-2'>
                            <p>Office : 0657-2300301</p>
                        </div>
                        <div className='px-2'>
                            <p>Mobile : +91-8235278909</p>
                        </div>
                    </div>

                </div>
            </m.div>
        </>
  )
}

export default Schedule