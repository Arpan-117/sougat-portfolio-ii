import { useEffect, useRef, useState } from 'react'
import { gsap, Power3 } from 'gsap'
import Lawyer from '../assets/pexels-pavel-danilyuk-8111881.jpg'

function Hero() {

  let app = useRef(null);
  let imgg = useRef(null);
  let content = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    if (!animationPlayed) {
      const tl = gsap.timeline();

      const headLLine = content.current.firstElementChild;
      const description = headLLine.nextElementSibling;
      const contentButton = content.current.children[2];

      // After the DOM has loaded, set visibility to visible and animate opacity
      gsap.to(app.current, { visibility: 'visible', opacity: 1, duration: 2 })
      
      //Image animation
      tl.from(imgg.current.firstElementChild, { y:-1080,  duration: 1.4, ease: Power3.easeOut }, 'Start')
      .from(imgg.current.firstElementChild.firstElementChild, {scale:1.4, ease:Power3.easeOut, duration:1.7 }, 0.3)
      //Content animation
      tl.staggerFrom([headLLine.children, description.children ], 1, {
        y: 44,
        opacity: 0,
        ease:Power3.easeOut,
        delay: .8
      }, .25, 'Start')
      // .from(contentP,  {y: 20, opacity: 0, duration:1, ease: Power3.easeOut}, 1.4)
      .from(contentButton, {y: 20, opacity: 0, duration:1, ease: Power3.easeOut}, 1.4)

      setAnimationPlayed(true);
    }
  }, [animationPlayed]);

  return (
    <>
        <div id='hero' className='flex flex-row customHero bg-[#F5EFE7] text-[#3E5879] h-screen px-40 justify-center items-center' ref={app} style={{ opacity: 0 }}>
          <div className='basis-1/3 py-40 px-10 ' ref={content}>
            <div className="paraContentLine">
              <p className='text-[#3E5879] text-4xl'>
                Expert Lawyer Specializing in Compliance, Risk and Governance
              </p>
            </div>
            
            <div className="paraContentLine2">
              <p className='text-[#3E5879] text-2xl'>
                Helping businesses navigate legal complexities with confidence and precision.
              </p>
            </div>
            <div className='buttonContainer'>
              <button className='bg-[#3E5879] text-[#F5EFE7] rounded-lg py-2 px-4'>Explore Services</button>
            </div>
          </div>

          <div className='basis-2/3 py-40 px-10' ref={imgg}>
            <div className="justOuterImgDiv" >
              <img src={Lawyer} alt='Lawyer' />
              </div>
          </div>
        </div>
    </>
  )
}

export default Hero