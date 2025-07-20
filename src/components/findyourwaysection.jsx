// At the top of your component file
import { MoveRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import backPattern from '../assets/findyourway/default.jpg';
import departmentsBg from '../assets/findyourway/departments.jpg';
import centersBg from '../assets/findyourway/centers.jpg';
import admissionBg from '../assets/findyourway/admission.jpg';
import researchBg from '../assets/findyourway/research.JPG';
import studentLifeBg from '../assets/findyourway/studentlife.jpg';
import scholarshipBg from '../assets/findyourway/scholarship.jpg';

export default function FindYourWay() {
  const [hovered, setHovered] = useState(null);
  const [currentBg, setCurrentBg] = useState(backPattern);

  const mainLinks = [
    { label: 'Departments', href: '#', bgImage: departmentsBg },
    { label: 'Centers', href: '#', bgImage: centersBg },
    { label: 'Admission', href: '#', bgImage: admissionBg },
    { label: 'Research', href: '#', bgImage: researchBg },
    { label: 'Student Life', href: '#', bgImage: studentLifeBg },
    {
      label: 'Scholarships and Financial Aid',
      href: '#',
      bgImage: scholarshipBg,
    },
  ];

  useEffect(() => {
    let timeoutId;

    if (hovered !== null) {
      timeoutId = setTimeout(() => {
        setCurrentBg(mainLinks[hovered].bgImage);
      }, 300); // 300ms delay
    } else {
      timeoutId = setTimeout(() => {
        setCurrentBg(backPattern);
      }, 300); // 300ms delay
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [hovered]);

  return (
    <section
      className='relative bg-center bg-cover w-full transition-all duration-700 ease-in-out'
      style={{
        backgroundImage: `url(${currentBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Linear gradient overlay */}
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(180deg, #003716 0%, rgba(0, 55, 22, 0.9) 30%, rgba(0, 55, 22, 0.7) 100%)',
        }}
      ></div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 py-24'>
        {/* Left Section */}
        <div className='w-full md:w-1/4 flex flex-col items-start text-left text-white'>
          <h2 className='text-4xl font-bold mb-4'>Find your way</h2>
          <p className='text-base mb-8 opacity-80 max-w-md'>
            Discover a realm of possibilities and navigate the various routes to
            achievement at IIUC University.
          </p>
          <div className='flex gap-4 flex-wrap'>
            <a
              href='#'
              className='border border-white text-white font-semibold px-5 py-2 rounded-full hover:bg-white hover:text-[#005C25] transition-all duration-300 ease-in-out'
            >
              Undergraduate Programs
            </a>
            <a
              href='#'
              className='border border-white text-white font-semibold px-5 py-2 rounded-full hover:bg-white hover:text-[#005C25] transition-all duration-300 ease-in-out'
            >
              Graduate Programs
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full md:w-3/4 flex justify-center border rounded-xl border-[#005C25]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-4xl rounded-xl overflow-hidden'>
            {mainLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                target='_blank'
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className={`relative flex items-center justify-center w-[304px] h-[312px] text-white font-semibold text-xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out group
                  ${
                    hovered === idx
                      ? 'bg-white bg-opacity-10 scale-105 shadow-lg'
                      : 'bg-transparent'
                  }
                `}
                style={{
                  minWidth: '100%',
                  minHeight: 250,
                  maxWidth: 304,
                  maxHeight: 350,
                  width: '100%',
                  height: '100%',
                }}
              >
                {/* Hover overlay */}
                {hovered === idx && (
                  <span className='absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-500 z-0' />
                )}

                {hovered === idx ? (
                  <span className='flex flex-col items-center justify-center z-10 transition-opacity duration-500 ease-in-out opacity-100'>
                    <span className='text-center px-4 text-lg text-white mb-4'>
                      {link.label}
                    </span>
                    <span className='bg-transparent border border-white rounded-full w-10 h-10 flex items-center justify-center shadow transition-transform duration-500 ease-in-out transform group-hover:-rotate-45'>
                      <MoveRight className='text-white w-5 h-5' />
                    </span>
                  </span>
                ) : (
                  <span className='z-10 text-center px-4 text-lg text-white transition-opacity duration-500 ease-in-out opacity-80'>
                    {link.label}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
