import React, { useState } from 'react';
import footerIcon from '../assets/footer-icon.png';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 bg-[#005C25] text-white rounded-full p-3 shadow-lg transition-opacity duration-300 md:hidden ${
        visible ? 'opacity-90' : 'opacity-0 pointer-events-none'
      }`}
      aria-label='Scroll to top'
    >
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        viewBox='0 0 24 24'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
      </svg>
    </button>
  );
};

const Footer = () => {
  return (
    <footer className='bg-[#003716] text-[#C8DED1] font-satoshi text-sm sm:text-base w-full'>
      {/* Top Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start w-full'>
          {/* University Logo */}
          <div className='flex flex-col items-center sm:items-start mb-8 sm:mb-0 w-full'>
            <img
              src={footerIcon}
              alt='IIUC Logo'
              className='h-14 sm:h-20 w-auto mb-4 mx-auto sm:mx-0'
            />
          </div>

          {/* Contact Info */}
          <div className='space-y-4 w-full text-center sm:text-left mb-8 sm:mb-0'>
            <h3 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-satoshi'>
              Contact info
            </h3>
            <div className='space-y-3'>
              <div className='flex items-center justify-center sm:justify-start space-x-3'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='break-words'>
                  Kumira, Chattogram-4318, Bangladesh
                </span>
              </div>
              <div className='flex items-center justify-center sm:justify-start space-x-3'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
                <span className='break-words'>info@iiuc.ac.bd</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className='space-y-4 w-full text-center sm:text-left mb-8 sm:mb-0'>
            <h3 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-satoshi'>
              Social Media
            </h3>
            <div className='flex justify-center sm:justify-start space-x-3'>
              <a
                href='#'
                className='w-12 h-12 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors'
              >
                <span className='text-sm sm:text-xs font-bold'>f</span>
              </a>
              <a
                href='#'
                className='w-12 h-12 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors'
              >
                <span className='text-sm sm:text-xs font-bold'>G</span>
              </a>
              <a
                href='#'
                className='w-12 h-12 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors'
              >
                <span className='text-sm sm:text-xs font-bold'>in</span>
              </a>
              <a
                href='#'
                className='w-12 h-12 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors'
              >
                <svg
                  className='w-5 h-5 sm:w-4 sm:h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Apply Online Button */}
          <div className='flex justify-center sm:justify-end items-center mt-6 sm:mt-0 w-full'>
            <button className='bg-white text-[#003716] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center group text-sm sm:text-base w-full sm:w-auto justify-center'>
              Apply online
              <svg
                className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-white border-opacity-20'></div>

      {/* Navigation Links */}
      <div className='max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full'>
          {/* Admission */}
          <div className='space-y-4 w-full text-center sm:text-left mb-8 sm:mb-0'>
            <h3 className='text-lg font-semibold font-fraunces'>Admission</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Apply Online
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  How to Apply(Video Guide)
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Admission Advertisement
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Tuition Fees, Waiver and Scholarship
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Payment Instruction
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Credit Transfer Information
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Video Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className='space-y-4 w-full text-center sm:text-left mb-8 sm:mb-0'>
            <h3 className='text-lg font-semibold font-fraunces'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Website Development Survey
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Web Portal Login
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Quick Contacts
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Certificate Verification
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Admit Card Verification
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Credit Transfer Information
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Bus Schedule
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  IIUC PABX Extension
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className='space-y-4 w-full text-center sm:text-left mb-8 sm:mb-0'>
            <h3 className='text-lg font-semibold font-fraunces'>Resources</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Center Research and Publication
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Journals published by IIUC
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Research Publications
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Certificate Verification
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Google Scholar Profile
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  IIUC Central Library
                </a>
              </li>
            </ul>
          </div>

          {/* About IIUC */}
          <div className='space-y-4 w-full text-center sm:text-left mb-8 sm:mb-0'>
            <h3 className='text-lg font-semibold font-fraunces'>About IIUC</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  IIUC History
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Mission & Vision
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Foreign Collaboration
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  IIUC Ranking
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Scholarship Reunion
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  UGC, Bangladesh
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Ministry of Education, Bangladesh
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors break-words'
                >
                  Career
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-white border-opacity-20'></div>

      {/* Bottom Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 w-full'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs sm:text-sm w-full text-center md:text-left'>
          <div className='truncate break-words w-full md:w-auto'>
            Copyright © 2017 - 2025 All rights reserved IIUC
          </div>
          <div className='truncate break-words w-full md:w-auto'>
            International Islamic University Chittagong | +8809613230505
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
