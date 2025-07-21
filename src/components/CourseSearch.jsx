import React, { useState } from 'react';
import c1 from '../assets/course/c1.jpg';
import c2 from '../assets/course/c2.png';
import c3 from '../assets/course/c3.png';
import c4 from '../assets/course/c4.jpg';
import c5 from '../assets/course/c5.jpg';
import c6 from '../assets/course/c6.png';
import bg from '../assets/bg.png';
import backPattern from '../assets/backpattern.png';

export default function CourseSearch() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [studyLevel, setStudyLevel] = useState('Study level');

  // Simulate pagination - in real app, this would come from API
  const allCourses = [
    {
      id: 1,
      title: 'Electronic And Telecommunication',
      level: 'Masters',
      levelColor: '#005C25',
      image: c6,
      alt: 'Circuit board with glowing orange lines',
    },
    {
      id: 2,
      title: "Qur'anic Sciences and Islamic Studies (QSIS)",
      level: 'Bachelor',
      levelColor: '#0D0357',
      image: c5,
      alt: 'Open book with Arabic script and red fez hat',
    },
    {
      id: 3,
      title: 'Computer Science And Engineering',
      level: 'Masters',
      levelColor: '#005C25',
      image: c4,
      alt: 'Person with glasses looking at laptop with code',
    },
    {
      id: 4,
      title: 'Arabic Language',
      level: 'Diploma',
      levelColor: '#0D0357',
      image: c3,
      alt: 'Hands holding open book with Arabic script',
    },
    {
      id: 5,
      title: 'Civil Engineering',
      level: 'Masters',
      levelColor: '#005C25',
      image: c2,
      alt: 'Architectural blueprints with compass and ruler',
    },
    {
      id: 6,
      title: 'Department of Law',
      level: 'Bachelor',
      levelColor: '#0D0357',
      image: c1,
      alt: 'Golden scale of justice with wooden gavel',
    },
    // Additional courses for pagination demo
    {
      id: 7,
      title: 'Mechanical Engineering',
      level: 'Masters',
      levelColor: '#005C25',
      image: c2,
      alt: 'Mechanical engineering',
    },
    {
      id: 8,
      title: 'Electrical Engineering',
      level: 'Bachelor',
      levelColor: '#0D0357',
      image: c6,
      alt: 'Electrical engineering',
    },
    {
      id: 9,
      title: 'Business Administration',
      level: 'Masters',
      levelColor: '#005C25',
      image: c1,
      alt: 'Business administration',
    },
  ];

  const coursesPerPage = 6;
  const totalPages = Math.ceil(allCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = allCourses.slice(startIndex, endIndex);

  const handleSearch = () => {
    // In real app, this would trigger API call
    console.log('Searching for:', searchTerm, 'Level:', studyLevel);
  };

  return (
    <div className='relative w-full py-16 px-8 font-satoshi overflow-hidden'>
      {/* Background Image with variable Opacity */}
      <div
        className='absolute inset-0 bg-no-repeat bg-cover bg-center opacity-5 z-0'
        style={{ backgroundImage: `url(${backPattern})` }}
      ></div>
      <div className='relative z-10'>
        <div className='max-w-7xl mx-auto'>
          {/* Header Section */}
          <div className='mb-8 sm:mb-10 lg:mb-12'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8'>
              Search for a course
            </h2>

            {/* Search and Filter Bar */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center'>
              {/* Search Input */}
              <div className='flex-1 relative'>
                <svg
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
                <input
                  type='text'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder='Search for a course or enter keywords...'
                  className='w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base'
                  style={{ backgroundColor: '#F2F7F4' }}
                />
              </div>

              {/* Study Level Dropdown */}
              <div className='w-full sm:w-64 md:w-80 lg:w-96 relative'>
                <select
                  value={studyLevel}
                  onChange={(e) => setStudyLevel(e.target.value)}
                  className='w-full appearance-none border border-gray-300 rounded-lg px-4 py-2.5 sm:py-3 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base'
                  style={{ backgroundColor: '#F2F7F4' }}
                >
                  <option value='Study level'>Study level</option>
                  <option value='Bachelor'>Bachelor</option>
                  <option value='Masters'>Masters</option>
                  <option value='Diploma'>Diploma</option>
                </select>
                <svg
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>

              {/* Find Course Button */}
              <button
                onClick={handleSearch}
                className='bg-[#005C25] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-300 flex items-center justify-center group whitespace-nowrap text-sm sm:text-base'
              >
                Find your course
                <svg
                  className='w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform'
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

          {/* Course Cards Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12'>
            {currentCourses.map((course) => (
              <div
                key={course.id}
                className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group'
              >
                <div className='relative'>
                  <img
                    src={course.image}
                    alt={course.alt}
                    className='w-full h-40 sm:h-48 lg:h-[344px] object-cover group-hover:scale-105 transition-transform duration-300'
                  />

                  {/* White overlay at bottom with gradient transition */}
                  <div className='absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-white via-white/90 to-transparent'></div>

                  {/* Level tag positioned in the white area */}
                  <span
                    className='absolute top-3 left-3 text-white text-xs font-semibold'
                    style={{
                      backgroundColor: course.levelColor,
                      width: '75px',
                      height: '32px',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {course.level}
                  </span>

                  {/* Course title positioned in the white area */}
                  <div className='absolute bottom-6 left-3 right-3'>
                    <h3 className='text-xs sm:text-sm lg:text-base font-bold text-black leading-tight'>
                      {course.title}
                    </h3>
                  </div>

                  {/* Arrow icon for some cards */}
                  {course.id === 4 && (
                    <div className='absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-800 rounded flex items-center justify-center'>
                      <svg
                        className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M3.293 7.293a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className='flex justify-center items-center space-x-1 sm:space-x-2'>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className='w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <svg
                className='w-3 h-3 sm:w-4 sm:h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-gray-300 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className='w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <svg
                className='w-3 h-3 sm:w-4 sm:h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
