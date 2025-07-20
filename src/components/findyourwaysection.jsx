// At the top of your component file
import { MoveRight } from 'lucide-react';
import { useState } from 'react';
import backPattern from '../assets/findyourway/default.jpg';
import departmentsBg from '../assets/findyourway/departments.jpg';
import centersBg from '../assets/findyourway/centers.jpg';
import admissionBg from '../assets/findyourway/admission.jpg';
import researchBg from '../assets/findyourway/research.JPG';
import studentLifeBg from '../assets/findyourway/studentlife.jpg';
import scholarshipBg from '../assets/findyourway/scholarship.jpg';

export default function FindYourWay() {
  const [hovered, setHovered] = useState(null);

  const mainLinks = [
    { label: 'Departments', href: '#', bgImage: departmentsBg },
    { label: 'Centers', href: '#', bgImage: centersBg },
    { label: 'Admission', href: '#', bgImage: admissionBg },
    { label: 'Research', href: '#', bgImage: researchBg },
    { label: 'Student Life', href: '#', bgImage: studentLifeBg },
    { label: 'Scholarships and Financial Aid', href: '#', bgImage: scholarshipBg },
  ];

  return (
    <section
      className='relative bg-center bg-cover w-full transition-all duration-700 ease-in-out'
      style={{ 
        backgroundImage: `url(${hovered !== null ? mainLinks[hovered].bgImage : backPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#003716] via-[#003716]/80 to-[#003716]/60 opacity-95'></div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 py-20'>
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
              className='bg-white text-[#005C25] font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition'
            >
              Undergraduate Programs
            </a>
            <a
              href='#'
              className='border border-white text-white font-semibold px-5 py-2 rounded-full hover:bg-white hover:text-[#005C25] transition'
            >
              Graduate Programs
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full md:w-3/4 flex justify-center border rounded-xl border-[#005C25]'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl rounded-xl overflow-hidden">
            {mainLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className={`relative flex items-center justify-center w-[304px] h-[312px] text-white font-semibold text-xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
                  ${
                    hovered === idx
                      ? 'bg-white bg-opacity-10 scale-105 shadow-lg'
                      : 'bg-transparent'
                  }
                `}
                style={{
                  minWidth: '100%',
                  minHeight: 180,
                  maxWidth: 304,
                  maxHeight: 330,
                  width: '100%',
                  height: '100%',
                }}
              >
                {/* Hover overlay */}
                {hovered === idx && (
                  <span className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-500 z-0" />
                )}

                {hovered === idx ? (
                  <span className="flex flex-col items-center justify-center z-10 transition-opacity duration-500 ease-in-out opacity-100">
                    <span className="text-center px-4 text-lg text-white mb-4">
                      {link.label}
                    </span>
                    <span className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow transition-transform duration-500 ease-in-out transform hover:-rotate-[45deg]">
                      <MoveRight className="text-[#005C25] w-7 h-7" />
                    </span>
                  </span>
                ) : (
                  <span className="z-10 text-center px-4 text-lg text-white transition-opacity duration-500 ease-in-out opacity-80">
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
