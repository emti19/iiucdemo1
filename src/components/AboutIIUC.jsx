import React from 'react';
import abfinal from '../assets/abfinal.png';

const AboutIIUC = () => {
  return (
    <div className='flex flex-col lg:flex-row font-satoshi items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-12 lg:py-16 lg:gap-24 w-full max-w-7xl mx-auto'>
      {/* Left Section - Visual Content */}
      <div className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] aspect-[4/3] flex items-center justify-center mb-6 sm:mb-8 lg:mb-0'>
        <div className='relative w-full h-full rounded-2xl overflow-hidden'>
          <img
            src={abfinal}
            alt='IIUC Campus'
            className='w-full h-full object-contain'
            style={{ maxHeight: '700px' }}
          />
        </div>
      </div>

      {/* Right Section - Text Content */}
      <div className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg flex items-center justify-center'>
        <div className='w-full'>
          {/* Establishment Date */}
          <div className='text-[#005C25] font-semibold text-xs sm:text-sm mb-2'>
            ESTD.1995
          </div>

          {/* Main Heading */}
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 md:mb-6'>
            More about IIUC
          </h2>

          {/* Description */}
          <p className='text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8'>
            IIUC is a leading private university in Bangladesh, blending
            academic excellence with Islamic values to develop skilled, ethical
            graduates through quality programs and expert faculty.
          </p>

          {/* Links List */}
          <div className='space-y-0'>
            {[
              { label: 'IIUC History', color: 'text-[#005C25]' },
              { label: 'Mission & Vision', color: 'text-black' },
              { label: 'Former IIUC VC & Pro-VC', color: 'text-black' },
              { label: 'IIUC Trustees', color: 'text-black' },
              { label: 'Contact Us', color: 'text-black' },
            ].map((item, idx) => (
              <React.Fragment key={item.label}>
                <div className='flex items-center justify-between group cursor-pointer pb-4'>
                  <span
                    className={`${item.color} font-medium group-hover:underline text-sm sm:text-base`}
                  >
                    {item.label}
                  </span>
                  <svg
                    className='w-4 h-4 sm:w-5 sm:h-5 text-[#005C25]'
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
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIIUC;
