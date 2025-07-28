import React, { useState } from 'react';
import campusImg from '../assets/heroCarousel/c1.jpg';
import { LuMoveRight } from 'react-icons/lu';
import backPattern from '../assets/backpattern.png';

const menuTabs = [
  'Admission Menu',
  'Video Guide',
  'Admission Contact',
  'Admission FAQ',
];

const admissionLinks = [
  { label: 'Apply Online', active: true },
  { label: 'Admission Advertisement' },
  { label: 'Instructions for Applicant' },
  { label: 'Print Admit Card' },
  { label: 'Print Admission Form' },
  { label: 'Print Offer Letter & Undertakings' },
  { label: 'Result of Admission Test' },
];

export default function AdmissionSection2({ bgColor, style, headingWhite }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className={`relative w-full py-10 sm:py-14 md:py-16 overflow-hidden ${
        bgColor || ''
      }`}
      style={style}
    >
      {/* Background Image with variable Opacity */}
      <div
        className='absolute inset-0 bg-no-repeat bg-cover bg-center opacity-80 z-0'
        style={{
          backgroundImage: `url(${backPattern})`,
          transform: 'scaleY(-1)',
          filter: 'invert(5%)',
        }}
      ></div>
      {/* Linear gradient overlay (bottom) */}
      <div
        className='absolute inset-0 z-10 pointer-events-none'
        style={{
          background:
            'linear-gradient(0deg, #003716 0%, rgba(0,55,22,0.85) 15%, rgba(0,55,22,0.0) 20%)',
        }}
      ></div>

      {/* Foreground Content */}
      <div className='container mx-auto px-4 sm:px-8'>
             <div className='relative z-10 w-full flex flex-col items-center max-w-7xl mx-auto'>
               {/* Title */}
               <h1
                 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 ${
                   headingWhite ? 'text-white' : ''
                 }`}
               >
                 Admission
               </h1>
     
               {/* Tabs */}
               <div className='flex justify-center mb-6 sm:mb-10 w-full'>
                 <div
                   className='
                     flex bg-[#F0F7F2] rounded-full px-1 py-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 max-w-full
                    grid grid-cols-2 gap-2 rounded-xl px-2 py-2 overflow-x-visible
                     lg:flex lg:gap-0 lg:rounded-full lg:px-1 lg:py-1 lg:overflow-x-auto
                   '
                 >
                   {menuTabs.map((tab, idx) => (
                     <button
                       key={tab}
                       onClick={() => setActiveTab(idx)}
                       className={`
                         px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap
                         ${
                           activeTab === idx
                             ? 'bg-[#005C25] text-white shadow'
                             : 'bg-transparent text-[#222]'
                         }
                         md:w-full
                       `}
                       style={{ minWidth: 110 }}
                     >
                       {tab}
                     </button>
                   ))}
                 </div>
               </div>
     
               {/* Main Card */}
               <div className='bg-[#F7FAF7] rounded-2xl flex flex-col md:flex-row w-full shadow border border-[#E6F0E6] p-4 sm:p-6 md:p-8 items-stretch'>
                 {/* Image Section */}
                 <div className='w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0 md:mr-6'>
                   <img
                     src={campusImg}
                     alt='IIUC Campus'
                     className='rounded-xl object-cover w-full h-48 sm:h-72 md:h-[420px] max-w-full md:max-w-[600px]'
                     style={{ maxWidth: '640px' }}
                   />
                 </div>
     
                 {/* Links or Coming Soon Section */}
                 <div className='w-full md:w-1/2 flex flex-col justify-center'>
                   {activeTab === 0 ? (
                     <div>
                       {admissionLinks.map((link, idx) => (
                         <a
                           key={link.label}
                           href='#'
                           className={`flex items-center justify-between py-3 sm:py-4 px-1 sm:px-2 border-b border-[#D9E5DD] text-sm sm:text-base font-medium transition-all duration-300 group ${
                             link.active
                               ? 'text-[#005C25] font-semibold'
                               : 'text-[#222] hover:text-[#005C25]'
                           } ${idx === 0 ? 'border-t-0' : ''}`}
                         >
                           <span>{link.label}</span>
                           <LuMoveRight
                             className={`w-5 h-5 ml-2 transition-opacity duration-300 ${
                               link.active
                                 ? 'opacity-100 text-[#005C25]'
                                 : 'opacity-60 group-hover:opacity-100 group-hover:text-[#005C25]'
                             }`}
                           />
                         </a>
                       ))}
                     </div>
                   ) : (
                     <div className='flex items-center justify-center h-32 sm:h-full text-lg sm:text-xl text-[#005C25] font-semibold'>
                       Coming soon
                     </div>
                   )}
                 </div>
               </div>
             </div>
           </div>
    </div>
  );
}
