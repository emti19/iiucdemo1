import React, { useState } from 'react';
import logo from '../assets/logo.png';
import TopTabNav from './TopTabNav';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <TopTabNav />
      <nav className='w-full sticky top-0 z-50 bg-white/30 backdrop-blur-lg shadow-lg'>
        {/* Main navbar */}
        <div className='flex items-center justify-between px-4 py-3'>
          <div className='container mx-auto flex justify-between items-center'>
            {/* Left: Logo and search */}
            <div className='flex items-center gap-4'>
              {/* Logo image */}
              <img
                src={logo}
                alt='IIUC Logo'
                className='w-12 h-12 object-contain rounded'
              />
              {/* Search bar (hidden on mobile) */}
              <div className='relative hidden md:block'>
                <input
                  type='text'
                  placeholder='Search here...'
                  className='pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 text-sm w-40'
                />
                <svg
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <circle cx='11' cy='11' r='8' />
                  <line x1='21' y1='21' x2='16.65' y2='16.65' />
                </svg>
              </div>
            </div>
            {/* Hamburger for mobile */}
            <button
              className='md:hidden flex items-center px-3 py-2 border rounded text-green-700 border-green-700'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label='Toggle menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
            {/* Center: Menu (hidden on mobile) */}
            <div className='hidden md:flex gap-2 bg-white bg-opacity-90 rounded-full shadow px-4 py-2'>
              {[
                { label: 'About', items: ['Overview', 'History', 'Mission'] },
                { label: 'Faculties', items: ['Faculty 1', 'Faculty 2'] },
                { label: 'Academic', items: ['Programs', 'Calendar'] },
                { label: 'Admission', items: ['Undergraduate', 'Graduate'] },
                {
                  label: 'Research & publication',
                  items: ['Research', 'Publications'],
                },
                { label: 'IQAC', items: ['IQAC Info'] },
              ].map((menu) => (
                <div key={menu.label} className='relative group'>
                  <button className='px-3 py-1 rounded-full hover:bg-green-100 focus:outline-none flex items-center gap-1 text-gray-700 font-medium'>
                    <span>{menu.label}</span>
                    <svg
                      className='w-3 h-3'
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
                  <div className='absolute left-0 mt-2 w-44 md:w-56 lg:w-44 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50'>
                    {menu.items.map((item) => (
                      <a
                        key={item}
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 text-gray-700'
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Right: Contact and Login (hidden on mobile) */}
            <div className='hidden md:flex items-center gap-3'>
              <button className='px-6 py-2 rounded-full border border-green-700 text-[#005C25] font-semibold hover:bg-green-50 transition'>
                Contact us
              </button>
              <button className='px-6 py-2 rounded-full bg-[#005C25] text-white font-semibold hover:bg-green-800 transition'>
                Log in
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className='md:hidden bg-white shadow-lg px-4 py-2'>
            <div className='flex flex-col gap-2'>
              {[
                { label: 'About', items: ['Overview', 'History', 'Mission'] },
                { label: 'Faculties', items: ['Faculty 1', 'Faculty 2'] },
                { label: 'Academic', items: ['Programs', 'Calendar'] },
                { label: 'Admission', items: ['Undergraduate', 'Graduate'] },
                {
                  label: 'Research & publication',
                  items: ['Research', 'Publications'],
                },
                { label: 'IQAC', items: ['IQAC Info'] },
              ].map((menu) => (
                <div key={menu.label} className='flex flex-col'>
                  <span className='font-semibold text-gray-700'>
                    {menu.label}
                  </span>
                  {menu.items.map((item) => (
                    <a
                      key={item}
                      href='#'
                      className='pl-4 py-1 text-gray-600 hover:bg-gray-100 rounded'
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
              <button className='mt-2 px-6 py-2 rounded-full border border-green-700 text-[#005C25] font-semibold hover:bg-green-50 transition'>
                Contact us
              </button>
              <button className='mt-2 px-6 py-2 rounded-full bg-[#005C25] text-white font-semibold hover:bg-green-800 transition'>
                Log in
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
