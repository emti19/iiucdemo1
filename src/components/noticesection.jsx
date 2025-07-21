import React, { useState } from 'react';
import { LuCalendarDays, LuMoveRight } from 'react-icons/lu';
import eventImg from '../assets/events.png';
import backPattern from '../assets/backpattern.png';

const tabs = ['General Notice', 'Press Release', 'Tenders'];
const generalNotices = [
  {
    date: '20',
    month: 'JUN',
    text: 'Pre-requisites to Sit for Semester End Exam. Spring-2025',
  },
  {
    date: '12',
    month: 'JUN',
    text: 'Pre-requisites to Sit for Semester End Exam.',
  },
  {
    date: '08',
    month: 'JUN',
    text: 'Pre-requisites to Sit for Semester End Exam. Spring-2025',
  },
  {
    date: '09',
    month: 'JUN',
    text: 'Pre-requisites to Sit for Semester End Exam.',
  },
  {
    date: '05',
    month: 'JUN',
    text: 'Notice for Course Registration Deadline.',
  },
  {
    date: '01',
    month: 'JUN',
    text: 'Important update regarding campus facilities.',
  },
];

export default function NoticeSection({ bgColor, style }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className={`relative w-full py-16 overflow-hidden ${bgColor} bg-gradient-to-b from-[#003716] via-[#003716]/30 to-transparent`}
       
    >
      {/* Background Image with variable Opacity */}
      <div
        className='absolute inset-0 bg-no-repeat bg-cover bg-center opacity-5 z-0'
        style={{ backgroundImage: `url(${backPattern})` }}
      ></div>

      {/* Foreground Content */}
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='relative z-10 bg-[#F7FAF7] rounded-xl border border-[#D9E5DD] p-8 flex flex-col lg:flex-row gap-8 w-full shadow max-w-7xl mx-auto'>
          {/* Notices */}
          <div className='flex-1'>
            <h2 className='text-2xl font-bold mb-6'>Notices</h2>
            <div className='flex flex-col sm:flex-row gap-2 mb-6 sm:bg-[#E6F0E6] sm:rounded-full sm:px-2 sm:py-1 w-fit'>
              {tabs.map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2 rounded-full font-semibold transition-all duration-500 
                    ${activeTab === idx ? 'bg-[#005C25] text-white shadow' : 'bg-[#E6F0E6] text-[#222]'}
                    sm:${activeTab === idx ? 'bg-[#005C25] text-white shadow' : 'bg-transparent text-[#222]'}
                  `}
                  style={{ minWidth: 120 }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className='flex flex-col gap-4 mb-4'>
              {activeTab === 0 ? (
                generalNotices.map((notice, idx) => (
                  <div
                    key={idx}
                    className='flex items-center gap-4 border-b border-[#D9E5DD] pb-4'
                  >
                    <div className='flex flex-col items-center justify-center w-12'>
                      <span className='text-xl font-bold text-[#005C25]'>
                        {notice.date}
                      </span>
                      <span className='text-xs font-semibold text-[#005C25]'>
                        {notice.month}
                      </span>
                    </div>
                    <span className='text-base text-[#222]'>{notice.text}</span>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-32 text-lg text-gray-500 font-semibold">
                  Coming soon
                </div>
              )}
            </div>
            <a
              href='#'
              className='text-[#005C25] font-semibold flex items-center gap-1 hover:underline mt-2'
            >
              view all notice <LuMoveRight className='w-4 h-4' />
            </a>
          </div>

          {/* Events */}
          <div className='flex-1 flex flex-col h-full'>
            <h2 className='text-2xl font-bold mb-6'>Events</h2>
            <div className='bg-white rounded-xl shadow p-4 flex flex-col h-full'>
              <img
                src={eventImg}
                alt='Event'
                className='rounded-lg mb-4 w-full h-100 object-cover'
              />
              <div className='flex items-center gap-2 text-[#005C25] text-sm mb-2'>
                <LuCalendarDays className='w-4 h-4' />
                <span>10 Jun, 2025 - 6PM</span>
              </div>
              <div className='font-semibold text-lg mb-2 text-[#222]'>
                International Conference on Islamic Universities and their
                Contemporary Challenges (ICIUCC)
              </div>
              <a
                href='#'
                className='text-[#005C25] font-semibold flex items-center gap-1 hover:underline mt-auto'
              >
                View all event <LuMoveRight className='w-4 h-4' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
