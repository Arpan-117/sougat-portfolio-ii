import { useEffect } from 'react'
import {easeInOut, motion as m} from 'motion/react'
import { container, item, item1 } from '../customJs/AnimationContext'
import { useLocation } from 'react-router'

function Blogpage() {

    const location = useLocation();

    useEffect(()=>{
        if(location.hash){
            window.history.replaceState(null,'',location.pathname);
        }
        window.scrollTo(0,0);
    },[location]);

  return (
    <>
        <m.div className='bg-[#E2DFE0] py-20 lg:px-28 lg:py-16'
                    initial={{y:'75%'}}
                    animate={{y: '0%'}}
                     exit={{
                        y: '-100%',
                        transition: { duration: 0.55, ease: "easeInOut" }
                      }}
                     transition={{duration: .5, ease:easeInOut}}>

            <div className="blogHeader overflow-hidden">
                <m.h2 className='text-center text-5xl p-2'
                initial={{y:'100%'}}
                animate={{y: '0%'}}
                exit={{opacity:0,}}
                transition={{duration: .55, ease:easeInOut, delay:.25}}>Blogs</m.h2>
            </div>

            <div className='md:flex md:flex-row py-16 px-10 sm:px-8'>

                <m.div className='basis-3/4 md:mr-4' variants={container} initial='hidden' animate='show' exit='exit'>
                    <div className="overflow-hidden"><m.h3 className='text-3xl latPost' variants={item}>Latest Post</m.h3></div>
                    <br />
                    <m.img className='sm:w-3/4 md:w-1/2' variants={item} src='https://i.imgur.com/xtuW18I.jpg' alt='A Lawyer walking'/>
                    <div className="overflow-hidden"><m.p variants={item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</m.p></div>
                    <br />
                    <m.img className='sm:w-3/4 md:w-1/2' variants={item} src='https://i.imgur.com/UZi1wyq.jpg' alt='A Lawyer walking'/>
                    <div className="overflow-hidden"><m.p variants={item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</m.p></div>
                </m.div>

                <m.div className='basis-1/4 mt-7 md:mt-0' variants={container} initial='hidden' animate='show' exit='exit'>
                    <div className="overflow-hidden">
                        <m.h3 className='text-2xl' variants={item1}>Trending News</m.h3>
                    </div>
                    <br />
                    <div className='flex md:flex-row flex-row justify-evenly'>
                        <div className='md:basis-1/2'>
                            <m.img className='w-32 min-w-28' variants={item1} src='https://i.imgur.com/tCQYbAF.jpg'/>
                        </div>
                        <div className='md:basis-1/2 overflow-hidden'>
                            <m.p className='pl-3' variants={item1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</m.p>
                        </div>
                    </div>
                </m.div>
            </div>
        </m.div>
    </>
  )
}

export default Blogpage