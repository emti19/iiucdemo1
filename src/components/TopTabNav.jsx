import React from 'react';

const TopTabNav = () => (
  <div className='hidden md:block w-full bg-[var(--primaryGreen)]'>
    <div className='container mx-auto flex justify-between items-center text-sm px-4 py-1'>
      {/* Left side quick links */}
      <div className='flex gap-6 items-center text-[#C8DED1]'>
        <a href='#' className='hover:underline'>
          ITD
        </a>
        <a href='#' className='hover:underline'>
          BoT
        </a>
        <a href='#' className='hover:underline'>
          Quick Contacts
        </a>
      </div>
      {/* Right side quick links */}
      <div className='flex gap-6 items-center text-[#C8DED1]'>
        <a href='#' className='hover:underline'>
          Webmail
        </a>
        <a href='#' className='hover:underline'>
          Transport
        </a>
        <div className='relative group' style={{ zIndex: 100 }}>
          <button className='flex items-center gap-1 focus:outline-none'>
            <span>Quick info</span>
            <svg
              className='w-3 h-3 ml-1'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>
          {/* Dropdown */}
          <div className='absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity' style={{ zIndex: 100 }}>
            <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
              Info 1
            </a>
            <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
              Info 2
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TopTabNav;
