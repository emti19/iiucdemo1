// At the top of your component file
import { MoveRight } from 'lucide-react';
import { useState } from 'react';
import backPattern from '../assets/fyw.png';

export default function FindYourWay() {
  const [hovered, setHovered] = useState(null);

  const mainLinks = [
    { label: 'Schools and Departments', href: '#' },
    { label: 'Institutes', href: '#' },
    { label: 'Admission', href: '#' },
    { label: 'Research', href: '#' },
    { label: 'Student Life', href: '#' },
    { label: 'Scholarships and Financial Aid', href: '#' },
  ];

  return (
    <section
      className='relative bg-center bg-cover w-full py-32'
      style={{ backgroundImage: `url(${backPattern})` }}
    >
      {/* Dark gradient overlay */}
      <div className='absolute inset-0 bg-[linear-gradient(to_bottom,_#003716,_#003716_80%)] opacity-90'></div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10'>
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
        <div className='w-full md:w-3/4 flex justify-center'>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 w-full max-w-md rounded-xl overflow-hidden'>
            {mainLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                target='_blank'
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className={`relative flex items-center justify-center h-40 text-white font-semibold text-lg cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
                  ${
                    hovered === idx
                      ? 'bg-white bg-opacity-10 scale-105 shadow-lg'
                      : 'bg-transparent'
                  }
                `}
              >
                {/* Hover overlay */}
                {hovered === idx && (
                  <span className='absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-500 z-0' />
                )}

                {hovered === idx ? (
                  <span className='flex flex-col items-center justify-center z-10 transition-opacity duration-500 ease-in-out opacity-100'>
                    <span className='text-center px-4 text-base text-white mb-2'>
                      {link.label}
                    </span>
                    <span className='bg-white rounded-full w-10 h-10 flex items-center justify-center shadow transition-transform duration-500 ease-in-out transform hover:-rotate-[45deg]'>
                      <MoveRight className='text-[#005C25] w-5 h-5' />
                    </span>
                  </span>
                ) : (
                  <span className='z-10 text-center px-4 text-base text-white transition-opacity duration-500 ease-in-out opacity-80'>
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
