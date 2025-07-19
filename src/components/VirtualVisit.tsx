import React from 'react';
import vv from '../assets/vv.png';

const VirtualVisit: React.FC = () => {
  return (
    <div
      className='relative py-20 px-8 font-satoshi h-screen'
      style={{
        backgroundImage: `url(${vv})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
      }}
    >
      {/* Linear gradient overlay */}
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(180deg, #F2F7F4 0%, rgba(242, 247, 244, 0.8) 30%, rgba(242, 247, 244, 0) 60%)',
        }}
      ></div>

      {/* Content */}
      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        <h2 className='text-5xl font-bold text-black mb-6'>Virtual Visit</h2>

        <p className='text-xl text-black mb-8 max-w-3xl mx-auto leading-relaxed'>
          Take our virtual tour and explore what it's like to study and live in
          IIUC— classrooms, facilities, culture, and campus life.
        </p>

        <button className='bg-[#005C25] text-white px-8 py-4 rounded-full text-lg hover:bg-[#004a1e] transition-colors duration-300 flex items-center mx-auto group'>
          Take a Virtual Tour
          <svg
            className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
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
  );
};

export default VirtualVisit;
