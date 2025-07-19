import React from 'react';
import r1 from '../assets/r1.jpg';
import r2 from '../assets/r2.jpg';

const ResearchPublication = () => {
  return (
    <div className='py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 font-satoshi'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-10 lg:mb-12'>
          <div className='flex-1 mb-6 lg:mb-0'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4'>
              Research and Publication
            </h2>
          </div>

          <a
            href='#'
            className='text-base sm:text-lg text-[#0D0357] flex items-center group'
          >
            View all Research
            <svg
              className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </div>

        {/* Research Cards */}
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>
          {/* Card 1 */}
          <div className='relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer w-full lg:w-[60%] min-h-[320px] sm:min-h-[400px] lg:min-h-[520px] max-h-[520px]'>
            <img
              src={r1}
              alt='Research on nanostructured TiO₂ thin films'
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 min-h-[320px] sm:min-h-[400px] lg:min-h-[520px] max-h-[520px]'
            />
            <div
              className='absolute bottom-0 left-0 right-0 p-4 sm:p-6'
              style={{
                background:
                  'linear-gradient(to top, #0D0357 0%, rgba(13, 3, 87, 0.8) 50%, transparent 100%)',
              }}
            >
              <div className='flex justify-between items-start'>
                <div className='flex-1'>
                  <p className='text-white text-xs sm:text-sm mb-1 sm:mb-2'>
                    Research
                  </p>
                  <h3 className='text-white text-base sm:text-lg font-bold leading-tight'>
                    Nanostructured TiO₂ Thin Films for Solar Cell Applications
                  </h3>
                </div>
                <div className='ml-3 sm:ml-4'>
                  <div className='w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <svg
                      className='w-4 h-4 text-[#0D0357]'
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

          {/* Card 2 */}
          <div className='relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer w-full lg:w-[40%] min-h-[220px] sm:min-h-[320px] lg:min-h-[520px] max-h-[520px]'>
            <img
              src={r2}
              alt='Research on telecommunications tower'
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 min-h-[220px] sm:min-h-[320px] lg:min-h-[520px] max-h-[520px]'
            />
            <div
              className='absolute bottom-0 left-0 right-0 p-4 sm:p-6'
              style={{
                background:
                  'linear-gradient(to top, #0D0357 0%, rgba(13, 3, 87, 0.8) 50%, transparent 100%)',
              }}
            >
              <div className='flex justify-between items-start'>
                <div className='flex-1'>
                  <p className='text-white text-xs sm:text-sm mb-1 sm:mb-2'>
                    Research
                  </p>
                  <h3 className='text-white text-base sm:text-lg font-bold leading-tight'>
                    Nanostructured TiO₂ Thin Films for Solar Cell Applications
                  </h3>
                </div>
                <div className='ml-3 sm:ml-4'>
                  <div className='w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <svg
                      className='w-4 h-4 text-[#0D0357]'
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
        </div>
      </div>
    </div>
  );
};

export default ResearchPublication;
