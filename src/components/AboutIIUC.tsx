import React from 'react';
import abfinal from '../assets/abfinal.png';

const AboutIIUC: React.FC = () => {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen font-satoshi items-center justify-center px-4 sm:px-8 py-8 sm:py-12 lg:py-0 lg:gap-24'>
      {/* Left Section - Visual Content */}
      <div className='max-w-2xl max-h-[700px] aspect-[4/3] flex items-center justify-center mb-8 lg:mb-0'>
        <div className='relative w-full h-full rounded-2xl overflow-hidden'>
          <img
            src={abfinal}
            alt='IIUC Campus'
            className='w-full h-full object-cover'
            style={{ maxHeight: '700px' }}
          />
        </div>
      </div>

      {/* Right Section - Text Content */}
      <div className='max-w-lg w-full flex items-center justify-center'>
        <div className='w-full'>
          {/* Establishment Date */}
          <div className='text-[#005C25] font-semibold text-xs sm:text-sm mb-2'>
            ESTD.1995
          </div>

          {/* Main Heading */}
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6'>
            More about IIUC
          </h2>

          {/* Description */}
          <p className='text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8'>
            IIUC is a leading private university in Bangladesh, blending
            academic excellence with Islamic values to develop skilled, ethical
            graduates through quality programs and expert faculty.
          </p>

          {/* Links List */}
          <div className='space-y-0'>
            <div className='flex items-center justify-between group cursor-pointer pb-4'>
              <span className='text-[#005C25] font-medium group-hover:underline'>
                IIUC History
              </span>
              <svg
                className='w-4 h-4 text-[#005C25]'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='w-full h-px bg-gray-200 mb-4'></div>

            <div className='flex items-center justify-between group cursor-pointer pb-4'>
              <span className='text-black font-medium group-hover:underline'>
                Mission & Vision
              </span>
              <svg
                className='w-4 h-4 text-[#005C25]'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='w-full h-px bg-gray-200 mb-4'></div>

            <div className='flex items-center justify-between group cursor-pointer pb-4'>
              <span className='text-black font-medium group-hover:underline'>
                Former IIUC VC & Pro-VC
              </span>
              <svg
                className='w-4 h-4 text-[#005C25]'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='w-full h-px bg-gray-200 mb-4'></div>

            <div className='flex items-center justify-between group cursor-pointer pb-4'>
              <span className='text-black font-medium group-hover:underline'>
                IIUC Trustees
              </span>
              <svg
                className='w-4 h-4 text-[#005C25]'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='w-full h-px bg-gray-200 mb-4'></div>

            <div className='flex items-center justify-between group cursor-pointer pb-4'>
              <span className='text-black font-medium group-hover:underline'>
                Contact Us
              </span>
              <svg
                className='w-4 h-4 text-[#005C25]'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIIUC;
