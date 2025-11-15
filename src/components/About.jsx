import { useState } from 'react'

function About() {

  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  return (
    <>

      <div id="about" className='flex bg-[#F5EFE7] text-[#3E5879] pt-28 pb-12 px-12 sm:px-20 md:px-32 justify-center items-center'>

        <div>

          <h2 className='font-[Playfair_Display] font-semibold text-center text-5xl'>About Us</h2>

          <div className='flex flex-row customAbout'>

            <div className='basis-1/2 py-14 md:py-20 px-10'>
              <img src='https://i.imgur.com/uho2JHg.jpg' alt='Lawyer' />
            </div>

            <div className='basis-1/2 py-12 md:py-20 px-10'>
              <h2 className='font-[Playfair_Display] font-medium text-[#3E5879] text-3xl py-2' onClick={() => handleSectionClick('Introduction')}>Introduction</h2>
              {activeSection === 'Introduction' && (
                <div>
                  {/* Content for Introduction */}
                  <p className='font-[Open_Sans]'>This is the introduction content.</p>
                </div>
              )}

              <h2 className='font-[Playfair_Display] font-medium text-[#3E5879] text-3xl py-4' onClick={() => handleSectionClick('Experience')}>Experience</h2>
              {activeSection === 'Experience' && (
                <div>
                  {/* Content for Experience */}
                  <p className='font-[Open_Sans]'>This is the experience content.</p>
                </div>
              )}

              <h2 className='font-[Playfair_Display] font-medium text-[#3E5879] text-3xl py-4' onClick={() => handleSectionClick('Details')}>Details</h2>
              {activeSection === 'Details' && (
                <div>
                  {/* Content for Details */}
                  <p className='font-[Open_Sans]'>This is the details content.</p>
                </div>
              )}

              <h2 className='font-[Playfair_Display] font-medium text-[#3E5879] text-3xl py-4' onClick={() => handleSectionClick('Values')}>Core Values</h2>
              {activeSection === 'Values' && (
                <div className='grid grid-cols-2 gap-4 font-[Open_Sans]'>
                  {/* Content for Details */}
                  <p>- Integrity</p>
                  <p>- Client centric approach</p>
                  <p>- Precision</p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default About