import React, { useState, useEffect, useRef } from 'react';

const StatsCounter = () => {
  const [counts, setCounts] = useState({
    students: 0,
    degrees: 0,
    graduates: 0,
    faculty: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const componentRef = useRef(null);

  const targetCounts = {
    students: 10,
    degrees: 25,
    graduates: 47,
    faculty: 317,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounts();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        students: Math.floor(targetCounts.students * progress),
        degrees: Math.floor(targetCounts.degrees * progress),
        graduates: Math.floor(targetCounts.graduates * progress),
        faculty: Math.floor(targetCounts.faculty * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepDuration);
  };

  return (
    <div
      ref={componentRef}
      className='bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-8 font-satoshi'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 lg:space-x-16 space-y-8 md:space-y-0'>
          {/* First Counter */}
          <div className='flex flex-col items-center text-center flex-1 min-w-[120px]'>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0357] mb-2'>
              {counts.students}K+
            </div>
            <div className='text-base sm:text-lg text-[#262E2A]'>
              Regular student
            </div>
          </div>

          {/* Divider */}
          <div className='hidden md:block w-px h-16 bg-gray-300'></div>
          <div className='block md:hidden w-16 h-px bg-gray-300 my-4'></div>

          {/* Second Counter */}
          <div className='flex flex-col items-center text-center flex-1 min-w-[120px]'>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0357] mb-2'>
              {counts.degrees}+
            </div>
            <div className='text-base sm:text-lg text-[#262E2A]'>
              Degree Offered
            </div>
          </div>

          {/* Divider */}
          <div className='hidden md:block w-px h-16 bg-gray-300'></div>
          <div className='block md:hidden w-16 h-px bg-gray-300 my-4'></div>

          {/* Third Counter */}
          <div className='flex flex-col items-center text-center flex-1 min-w-[120px]'>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0357] mb-2'>
              {counts.graduates}K+
            </div>
            <div className='text-base sm:text-lg text-[#262E2A]'>
              Graduate students
            </div>
          </div>

          {/* Divider */}
          <div className='hidden md:block w-px h-16 bg-gray-300'></div>
          <div className='block md:hidden w-16 h-px bg-gray-300 my-4'></div>

          {/* Fourth Counter */}
          <div className='flex flex-col items-center text-center flex-1 min-w-[120px]'>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0357] mb-2'>
              {counts.faculty}+
            </div>
            <div className='text-base sm:text-lg text-[#262E2A]'>
              Regular faculty
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
