import { useEffect } from 'react'
import { Link, Element } from 'react-scroll'
import { useLocation } from 'react-router'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'

function Home() {

    const location = useLocation();

    useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } // adjust as needed based on your content loading
    }
  }, [location]);

  return (
    <>

      
        {/* Right-Side Navigation */}
        <div className="side-nav">
          <Link to="hero-sec" smooth={true} duration={800} className="dot" />
          <Link to="about-sec" smooth={true} duration={800} className="dot" />
          <Link to="services-sec" smooth={true} duration={800} className="dot" />
          <Link to="contact-sec" smooth={true} duration={800} className="dot" />
        </div>

        <Element name="hero-sec" className="section"><Hero /></Element>
        

        <Element name="about-sec" className="section"><About /></Element>
        

        <Element name="services-sec" className="section"><Services /></Element>
        

        <Element name="contact-sec" className="section"><Contact /></Element>
        


      </>
  )
}

export default Home