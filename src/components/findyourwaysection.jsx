// At the top of your component file
import { MoveRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import backpattern from '../assets/findyourway/backpattern.jpg';
import departmentsbg from '../assets/findyourway/departments.jpg';
import centersbg from '../assets/findyourway/centers.jpg';
import admissionbg from '../assets/findyourway/admission.jpg';
import researchbg from '../assets/findyourway/research.JPG';
import studentLifebg from '../assets/findyourway/studentlife.jpg';
import scholarshipbg from '../assets/findyourway/scholarship.jpg';

const mainLinks = [
  { label: 'Departments', href: '#', bgImage: departmentsbg },
  { label: 'Centers', href: '#', bgImage: centersbg },
  { label: 'Admission', href: '#', bgImage: admissionbg },
  { label: 'Research', href: '#', bgImage: researchbg },
  { label: 'Student Life', href: '#', bgImage: studentLifebg },
  { label: 'Scholarships & Aid', href: '#', bgImage: scholarshipbg },
];

export default function FindYourWay() {
  const [hovered, setHovered] = useState(null);
  const [currentBg, setCurrentBg] = useState(backpattern);

  useEffect(() => {
    let timeoutId;
    if (hovered !== null) {
      timeoutId = setTimeout(() => {
        setCurrentBg(mainLinks[hovered].bgImage);
      }, 300); // 300ms delay
    } else {
      timeoutId = setTimeout(() => {
        setCurrentBg(backpattern);
      }, 300); // 300ms delay
    }
    return () => clearTimeout(timeoutId);
  }, [hovered]);

  return (
    <section
      className='relative w-full py-16 sm:py-24 flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out'
      style={{
        backgroundImage: `url(${currentBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient overlay */}
      <div
        className='absolute inset-0 z-0'
        style={{
          background:
            'linear-gradient(to bottom, rgba(0, 55, 22, 1) 0%, rgba(0, 55, 22, 0.7) 100%)',
        }}
      ></div>

      <div className='relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-8 gap-10'>
        {/* Top Row */}
        <div className='w-full flex flex-col items-center text-center text-white mb-0'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg'>
            Explore Your Future
          </h2>
          <p className='text-base sm:text-lg opacity-90 max-w-2xl mx-auto drop-shadow mb-6'>
            Unlock your potential with our diverse range of programs. Your
            future is waiting.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <a
              href='#'
              className='bg-white text-[#005C25] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#005C25] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white'
            >
              Undergraduate Programs
            </a>
            <a
              href='#'
              className='bg-white text-[#005C25] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#005C25] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white'
            >
              Graduate Programs
            </a>
          </div>
        </div>

        {/* Bottom Row: Glassmorphism Cards */}
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6'>
          {mainLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              tabIndex={0}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(idx)}
              onBlur={() => setHovered(null)}
              className={`relative group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 focus:ring-2 focus:ring-white focus:z-20 border border-white/20 hover:border-white/40 ${
                hovered === idx ? 'scale-105 z-10' : 'scale-100'
              }`}
              style={{
                minHeight: 220,
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Card content */}
              <div className='relative z-20 flex flex-col items-center justify-center h-full p-6'>
                <span className='text-base sm:text-lg font-bold text-white text-center drop-shadow-lg mb-4 transition-opacity duration-300 group-hover:opacity-0'>
                  {link.label}
                </span>
                <span className='absolute bg-white/20 border border-white/30 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:-rotate-[30deg] group-hover:bg-white/30 opacity-0 group-hover:opacity-100'>
                  <MoveRight className='text-white w-5 h-5' />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
