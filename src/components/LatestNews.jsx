import { motion } from 'framer-motion';
import news from '../assets/news.png';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.9,
      ease: 'easeOut',
    },
  }),
};

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      title: 'Optical Response and Lithiation in Sn-Based 211 MAX Phases',
      date: '10 Jun, 2025 - 6PM',
      image: news,
    },
    {
      id: 2,
      title:
        'Structural and Magnetic Properties of Rare Earth Perovskite Oxides',
      date: '10 Jun, 2025 - 6PM',
      image: news,
    },
    {
      id: 3,
      title: 'Nanostructured TiO2 Thin Films for Solar Cell Applications',
      date: '10 Jun, 2025 - 6PM',
      image: news,
    },
  ];

  return (
    <div className='py-8 sm:py-12 lg:py-16 px-4 sm:px-8 font-satoshi'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-black'>
            Latest news
          </h2>
          <a
            href='#'
            className='text-base sm:text-lg text-black hover:underline flex items-center group'
          >
            View all Posts
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

        {/* News Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {newsData.map((item, i) => (
            <motion.div
              key={item.id}
              className='rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col h-full'
              custom={i}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.015 }}
            >
              {/* News Image */}
              <div className='relative'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-40 sm:h-48 object-cover rounded-t-xl'
                />
              </div>

              {/* News Content */}
              <div className='p-4 sm:p-6 flex flex-col flex-1'>
                {/* Date with Calendar Icon */}
                <div className='flex items-center text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3'>
                  <svg
                    className='w-4 h-4 mr-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {item.date}
                </div>

                {/* News Title */}
                <h3 className='text-base sm:text-lg font-bold text-black leading-tight hover:text-gray-700 transition-colors duration-200 flex-1'>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
