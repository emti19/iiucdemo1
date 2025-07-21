import React, { useState, useEffect } from 'react';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';

import slide1 from '../assets/heroCarousel/c1.jpg';
import slide2 from '../assets/heroCarousel/c2.jpg';
import slide3 from '../assets/heroCarousel/c3.jpg';
import slide4 from '../assets/heroCarousel/c4.jpg';
import slide5 from '../assets/heroCarousel/c5.jpg';
import slide6 from '../assets/heroCarousel/c6.jpeg';

import { GoPersonAdd } from 'react-icons/go';
import { PiMicroscope } from 'react-icons/pi';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { LuCalendarDays, LuMoveRight } from 'react-icons/lu';

const images = [slide1, slide2, slide3, slide4, slide5, slide6];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % images.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the divisor for more/less parallax effect
      setParallax(window.scrollY * 0.4);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);

  const quickLinks = [
    { label: 'Admission', icon: <GoPersonAdd />, href: '#' },
    { label: 'Research', icon: <PiMicroscope />, href: '#' },
    { label: 'Faculty', icon: <BsPersonBoundingBox />, href: '#' },
    { label: 'Events', icon: <LuCalendarDays />, href: '#' },
  ];

  return (
    <div className='relative w-full h-[100vh] overflow-hidden z-0 -mt-16'>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            current === idx ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
          style={{
            pointerEvents: current === idx ? 'auto' : 'none',
            transform: `translateY(${parallax}px)`,
            willChange: 'transform',
          }}
        />
      ))}

      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#003716] via-[#003716]/90 to-transparent h-[32rem] z-30 flex items-end'>
        <div className='container mx-auto px-4 pb-32 w-full'>
          <div className='flex items-center justify-between text-white mb-8'>
            <div>
              <p className='text-lg font-medium mb-2'>Welcome To</p>
              <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>
                International Islamic <br /> University Chittagong
              </h1>
              <p className='text-sm font-medium my-2'>
                Combine Quality with Morality
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <button
                onClick={prevSlide}
                className='bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-70 transition'
                aria-label='Previous Slide'
              >
                <FaAnglesLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className='bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-70 transition'
                aria-label='Next Slide'
              >
                <FaAnglesRight size={20} />
              </button>
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-6'>
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group flex flex-col items-start transition-opacity duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? 'opacity-40'
                    : 'opacity-100'
                }`}
              >
                {/* Flex container with space between icon+label and arrow */}
                <div className='flex justify-between items-center w-full text-white text-lg font-semibold'>
                  <div className='flex items-center gap-5'>
                    {link.icon}
                    {link.label}
                  </div>
                  {/* Right arrow: hidden until hover */}
                  <LuMoveRight className='w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>
                <span className='block w-full h-0.5 bg-white mt-2 transition' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
