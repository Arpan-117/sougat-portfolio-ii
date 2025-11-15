import { useEffect, useRef, useState } from 'react'
import { gsap, Power3 } from 'gsap'
import { bannerData } from '../data/data.js'
// import Lawyer from '../assets/pexels-pavel-danilyuk-8111881.jpg'

function Hero() {

  let app = useRef(null);
  let imgg = useRef(null);
  let content = useRef(null);
  // const [current, setCurrent] = useState(0);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev+1)%banner.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [images.length]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % bannerData.length);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    if (!animationPlayed) {
      const tl = gsap.timeline();

      const headLLine = content.current.firstElementChild;
      const description = headLLine.nextElementSibling;
      const contentButton = content.current.children[2];

      // After the DOM has loaded, set visibility to visible and animate opacity
      gsap.to(app.current, { visibility: 'visible', opacity: 1, duration: 2 })

      //Image animation
      tl.from(imgg.current.firstElementChild, { y: -1080, duration: 1.4, ease: Power3.easeOut }, 'Start')
        .from(imgg.current.firstElementChild.firstElementChild, { scale: 1.4, ease: Power3.easeOut, duration: 1.7 }, 0.3)
      //Content animation
      tl.staggerFrom([headLLine.children, description.children], 1, {
        y: 44,
        opacity: 0,
        ease: Power3.easeOut,
        delay: .8
      }, .25, 'Start')
        // .from(contentP,  {y: 20, opacity: 0, duration:1, ease: Power3.easeOut}, 1.4)
        .from(contentButton, { y: 20, opacity: 0, duration: 1, ease: Power3.easeOut }, 1.4)

      setAnimationPlayed(true);
    }
  }, [animationPlayed]);

  return (
    <>
      <div id='hero' className='flex flex-row customHero bg-[#F5EFE7] text-[#3E5879] h-screen px-40 justify-center items-center' ref={app} style={{ opacity: 0 }}>

        <div className='basis-1/2 py-40 px-10 ' ref={content}>
          <div className="paraContentLine overflow-hidden">
            <h1 className='font-[Playfair_Display] font-semibold text-[#3E5879] text-4xl'>
              Expert Lawyer Specializing in Compliance, Risk and Governance
            </h1>
          </div>

          <div className="paraContentLine2">
            <h3 className='font-[Open_Sans] font-medium text-[#3E5879] text-xl mt-5 mb-[25px]'>
              Helping businesses navigate legal complexities with confidence and precision.
            </h3>
          </div>

          <div className="py-4">
            <div className='grid grid-cols-2 gap-4 font-[Open_Sans]'>
              <p>⭐ Experienced Lawyer</p>
              <p>⭐ Transparent Pricing</p>
              <p>⭐ Fast Documentation</p>
              <p>⭐ 100% Confidential</p>
            </div>
          </div>

          <div>
            <button className='bg-[#3E5879] font-medium text-[#F5EFE7] rounded-lg py-2 px-4 hover:scale-110 shadow-xl/30'>Explore Services</button>
          </div>
        </div>

        <div className='basis-1/2 py-40 px-10 border-2 border-[#3E5879]' ref={imgg}>

          <div
      className="relative w-full h-[200px] overflow-hidden flex items-center justify-center p-6 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Wrapper */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {bannerData.map((text, i) => (
          <div
            key={i}
            className="w-full h-full items-center justify-center text-center px-6 shrink-0"
          >
            <h3 className='py-2 font-semibold text-xl'>{text.heading}</h3>
            <p className='py-2'>{text.description}</p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-blue-900/50 text-white text-2xl px-3 py-1 rounded hover:bg-blue-900/70"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-blue-900/50 text-white text-2xl px-3 py-1 rounded hover:bg-blue-900/70"
      >
        ❯
      </button>
    </div>

          {/* <div className="overflow-hidden shadow-xl/30" >
              <img src={Lawyer} alt='Lawyer' className='' />
              </div> */}
          {/* <img src={banner[current]} alt='Lawyer' className='shadow-xl/30 transition-opacity duration-1000 ease-in-out ' /> */}
        </div>
      </div>
    </>
  )
}

export default Hero