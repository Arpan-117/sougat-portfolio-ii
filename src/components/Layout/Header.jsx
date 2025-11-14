import { useState, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const closeMenuRef = useRef(null);
  const svgRef = useRef(null);
  const sideMenu = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if(svgRef.current.style.display == 'none'){
      svgRef.current.style.display = 'block'
      // sideMenu.current.style.right = '0vw';
    }else{
      svgRef.current.style.display = 'none'
      // sideMenu.current.style.right = '0vw';
    };
  };

  // A helper function to handle navigation and scroll smoothly
  const handleNavigation = (hash) => {
    if (location.pathname === '/') {
      window.history.pushState(null, '', `/#${hash}`);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate without a full reload
      navigate(`/#${hash}`);
    }
  };

  return (
    <>
      <nav className='flex sticky z-10 top-0 justify-around bg-opacity-85 bg-[#213555] text-[#F5EFE7] backdrop-blur-md'>

        <div className='pb-[15px] pt-[12px]'>
          <h3 className=''>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  navigate('/');
                } else {
                  // If already on home, scroll to the "hero" section
                  const element = document.getElementById('hero');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              Better Call Sougat
            </Link>
          </h3>
        </div>

        <div className='sm:block hidden pb-[15px] pt-[12px]'>
          <h3 className=''>
            <Link
              to="/#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('about');
              }}
            >
              About
            </Link>
          </h3>
        </div>

        <div className='sm:block hidden pb-[15px] pt-[12px]'>
          <h3 className=''>
            <Link
              to="/consultations"
              onClick={(e) => {
                // e.preventDefault();
                // handleNavigation('services');
              }}
            >
              Services
            </Link>
          </h3>
        </div>

        <div className='sm:block hidden pb-[15px] pt-[12px]'>
          <h3 className=''>
            <Link
              to="/blog"
              onClick={(e) => {
                // e.preventDefault();
                // handleNavigation('services');
              }}
            >
              Blogs
            </Link>
          </h3>
        </div>

        {/* <ul className='sm:block hidden'>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul> */}

        <div className='sm:block hidden pb-[15px] pt-[12px]'>
          <h3 className=''><Link
            to="/#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('contact');
            }}
          >
            Contact
          </Link></h3>
        </div>

        <div className='mr-7 sm:mr-0 pb-[15px] pt-[12px]'>
          <Link to="./schedule"><button className='bg-[#3E5879] text-[#F5EFE7] rounded-lg shadow-md shadow-[#F5EFE7] px-1 sm:px-4 mr-1'>Schedule a Consultation</button></Link>
        </div>

        <div className="sm:hidden fixed right-1 pb-[15px] pt-[12px]">
          <button onClick={toggleMenu}>
            <svg className="h-6 w-6" ref={svgRef} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className={`sm:hidden pb-[15px] pt-[12px] ${isMenuOpen ? 'block' : 'hidden'} fixed h-screen px-10 py-20 top-0 right-0 bottom-0 bg-[#445570]`} ref={sideMenu}>
        <button className="absolute top-6 right-6" ref={closeMenuRef} onClick={toggleMenu}>
          <img 
            src="https://i.imgur.com/GdNHUTA.png"
            alt="placeholder"
            className=" w-5 cursor-pointer"
          />
        </button>
          <ul className='flex flex-col gap-4 '>
            <li onClick={toggleMenu}><Link to="/#hero"
            onClick={()=>{
              handleNavigation('hero');
            }}>
              <p>Home</p></Link>
            </li>
            <li onClick={toggleMenu}><Link to="/#about"
            onClick={()=>{
              handleNavigation('about');
            }}>
              <p>About Me</p></Link>
            </li>
            <li onClick={toggleMenu}><Link to="/#services"
            onClick={()=>{
              handleNavigation('services');
            }}>
              <p>Services</p></Link>
            </li>
            <li onClick={toggleMenu}><Link to="/blog">
              <p>Blogs/Insights</p></Link>
            </li>
            <li onClick={toggleMenu}><Link to="/schedule"
            onClick={()=>{
              handleNavigation('contact');
            }}>
              <p>Contact</p></Link>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Header