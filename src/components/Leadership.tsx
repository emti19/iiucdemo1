import React from 'react';
import pro from '../assets/pro.png';
import vc from '../assets/vc.png';
import chairman from '../assets/chairman.png';
import pre from '../assets/pre.png';

const Leadership: React.FC = () => {
  const leaders = [
    {
      id: 1,
      title: "Hon'ble Chancellor",
      name: 'Mohammed Shahabuddin',
      image: pre,
    },
    {
      id: 2,
      title: "Hon'ble Chairman",
      name: 'A.N.M Shamsul Islam',
      image: chairman,
    },
    {
      id: 3,
      title: "Hon'ble VC",
      name: 'Prof. Dr. Mohammad Ali Azadi',
      image: vc,
    },
    {
      id: 4,
      title: "Hon'ble Pro VC",
      name: '',
      image: pro,
    },
  ];

  return (
    <div className='bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-8 font-satoshi'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 font-satoshi'>
          OUR ESTEEMED LEADERSHIP
        </h2>

        {/* Leadership Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className='bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full'
            >
              {/* Profile Image */}
              <div className='relative flex items-center justify-center bg-gray-50'>
                <img
                  src={leader.image}
                  alt={leader.title}
                  className='w-full h-56 sm:h-64 lg:h-80 object-contain max-h-80'
                />
              </div>

              {/* Profile Info */}
              <div className='p-4 sm:p-6 text-left flex flex-col flex-1 justify-end'>
                <h3 className='text-base sm:text-lg font-bold text-black mb-1 sm:mb-2'>
                  {leader.title}
                </h3>
                {leader.name && (
                  <p className='text-sm sm:text-base text-black'>
                    {leader.name}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
