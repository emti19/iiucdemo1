import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import bg from '../assets/bg.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import gallery images
import g1 from '../assets/gallery/g1.png';
import g2 from '../assets/gallery/g2.png';
import g3 from '../assets/gallery/g3.png';
import g4 from '../assets/gallery/g4.png';
import g5 from '../assets/gallery/g5.png';
import g6 from '../assets/gallery/g6.png';
import g7 from '../assets/gallery/g7.png';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const galleryImages = [
    { id: 1, src: g1, alt: 'Campus Building' },
    { id: 2, src: g2, alt: 'Graduation Celebration' },
    { id: 3, src: g3, alt: 'University Mosque' },
    { id: 4, src: g4, alt: 'Reflection Building' },
    { id: 5, src: g5, alt: 'Campus Pathway' },
    { id: 6, src: g6, alt: 'Campus View' },
    { id: 7, src: g7, alt: 'University Grounds' },
  ];

  const openLightbox = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div
        className='py-16 px-8 font-satoshi relative'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Color overlay with very high opacity to hide background */}
        <div
          className='absolute inset-0'
          style={{
            backgroundColor: '#F2F7F4',
            opacity: 0.98,
          }}
        ></div>

        <div className='max-w-7xl mx-auto relative z-10'>
          {/* Header Section */}
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12'>
            <div className='flex-1 mb-6 lg:mb-0'>
              <h2 className='text-4xl font-bold text-black mb-4'>
                Pictures and Gallery
              </h2>
              <p className='text-lg text-black max-w-2xl'>
                Explore moments from campus life, events, and student activities
                captured through the lens of IIUC's vibrant community.
              </p>
            </div>

            <a
              href='#'
              className='text-lg text-black underline hover:no-underline flex items-center group'
            >
              Picture gallery
              <svg
                className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </div>

          {/* Image Gallery Section with Swiper */}
          <div className='relative'>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView='auto'
              pagination={{
                clickable: true,
                type: 'progressbar',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className='gallery-swiper'
            >
              {galleryImages.map((image) => (
                <SwiperSlide key={image.id} className='!w-auto'>
                  <div
                    className='h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer'
                    onClick={() => openLightbox(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className='h-full object-cover hover:scale-105 transition-transform duration-300'
                      style={{ width: 'auto' }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <style>{`
          .gallery-swiper .swiper-slide {
            width: auto !important;
          }
          
          .gallery-swiper .swiper-pagination {
            position: relative !important;
            bottom: auto !important;
            top: 20px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 200px !important;
            height: 4px !important;
            background: rgba(0, 0, 0, 0.2) !important;
            border-radius: 2px !important;
            overflow: hidden !important;
          }
          
          .gallery-swiper .swiper-pagination-progressbar {
            background: rgba(0, 0, 0, 0.2) !important;
            border-radius: 2px !important;
          }
          
          .gallery-swiper .swiper-pagination-progressbar-fill {
            background: #000 !important;
            border-radius: 2px !important;
            transition: width 0.3s ease !important;
          }
        `}</style>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4'
          onClick={closeLightbox}
        >
          <div className='relative max-w-4xl max-h-full'>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className='absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10'
            >
              <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className='max-w-full max-h-full object-cover rounded-lg shadow-2xl'
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
