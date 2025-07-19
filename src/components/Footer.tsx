import React from 'react';
import footerIcon from '../assets/footer-icon.png';

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#003716] text-[#C8DED1] font-satoshi'>
      {/* Top Section */}
      <div className='max-w-7xl mx-auto px-8 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 items-start'>
          {/* University Logo */}
          <div className='flex flex-col items-start'>
            <img
              src={footerIcon}
              alt='IIUC Logo'
              className='h-20 w-auto mb-4'
            />
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold mb-4 font-satoshi'>
              Contact info
            </h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
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
                <span>Kumira, Chattogram-4318, Bangladesh</span>
              </div>
              <div className='flex items-center space-x-3'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
                <span>info@iiuc.ac.bd</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold mb-4 font-satoshi'>
              Social Media
            </h3>
            <div className='flex space-x-3'>
              <a
                href='#'
                className='w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors'
              >
                <span className='text-sm font-bold'>f</span>
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors'
              >
                <span className='text-sm font-bold'>G</span>
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors'
              >
                <span className='text-sm font-bold'>in</span>
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors'
              >
                <svg
                  className='w-4 h-4'
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
          <div className='flex justify-end'>
            <button className='bg-white text-[#003716] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center group'>
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
      <div className='max-w-7xl mx-auto px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Admission */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold font-fraunces'>Admission</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Apply Online
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  How to Apply(Video Guide)
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Admission Advertisement
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Tuition Fees, Waiver and Scholarship
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Payment Instruction
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Credit Transfer Information
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Video Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold font-fraunces'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Website Development Survey
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Web Portal Login
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Quick Contacts
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Certificate Verification
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Admit Card Verification
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Credit Transfer Information
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Bus Schedule
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  IIUC PABX Extension
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold font-fraunces'>Resources</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Center Research and Publication
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Journals published by IIUC
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Research Publications
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Certificate Verification
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Google Scholar Profile
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  IIUC Central Library
                </a>
              </li>
            </ul>
          </div>

          {/* About IIUC */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold font-fraunces'>About IIUC</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  IIUC History
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Foreign Collaboration
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  IIUC Ranking
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Scholarship Reunion
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  UGC, Bangladesh
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
                  Ministry of Education, Bangladesh
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300 transition-colors'>
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
      <div className='max-w-7xl mx-auto px-8 py-6'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <div className='text-sm'>
            Copyright © 2017 - 2025 All rights reserved IIUC
          </div>
          <div className='text-sm'>
            International Islamic University Chittagong | +8809613230505
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
