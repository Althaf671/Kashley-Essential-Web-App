import { useRef } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// assets loader
import getImage from '../../assets/assetsLoader';

// import other library
import { motion, useInView } from 'framer-motion';

const SwiperBannerComponent = () => {

  // Images 
  const images = [
    'swiperImg/Latest_Card.png',
    'swiperImg/Office_Boy_Pack.png',
    'swiperImg/Ramadhan_Discount.png',
    'swiperImg/Women_Shirt_Discount.png',
  ];

  // Parallax Title
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return ( 
  <>

  {/* Custom Slider */}
  <div className='relative desktop:min-h-[20rem] laptop:min-h-[19rem] 11inch:min-h-[17rem] 8inch:min-h-[15rem] tablet:min-h-[14rem] phone:min-h-[9rem] justify-center items-center desktop:mt-0 laptop:mt-20 11inch:mt-20 8inch:mt-10 tablet:mt-10 phone:mt-10 desktop:mx-10 laptop:mx-10 11inch:mx-10 8inch:mx-10 tablet:mx-7 phone:mx-5 gap-5'>
    <Swiper
      className='desktop:mb-7 laptop:mb-7 11inch:mb-7 8inch:mb-7 tablet:mb-7 phone:mb-5 overflow-hidden min-h-max flex justify-center items-center desktop:mx-10 laptop:mx-10 11inch:mx-10 8inch:mx-10 tablet:mx-7 phone:mx-0 '
      modules={[Pagination, Autoplay]}
      slidesPerView="auto"
      spaceBetween={20}
      speed={1500}
      loop={true} 
      breakpoints={{
        360: { slidesPerView: 2, spaceBetween: 10, minWidth: 100 },  // phone display / 360 x 640
        640: { slidesPerView: 2, spaceBetween: 20, minWidth: 200},  // tablet display / 640 x 1136
        744: { slidesPerView: 2, spaceBetween: 20, minWidth: 200 },  // 8inch display / 744 x 1133
        834: { slidesPerView: 2.4, spaceBetween: 20, minWidth: 300 },  // 11inch display / 834 x 1194
        1024: { slidesPerView: 2.5, spaceBetween: 20, minWidth: 500 }, // laptop display / 1024 x 1366
        1280: { slidesPerView: 3, spaceBetween: 20, minWidth: 600  }, // desktop display / 1280 x 800
      }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
      pagination={{ clickable: true,
        el: '.custom-pagination'
       }}
    >
      {images.map((src, index) => (

          <SwiperSlide key={index}>
          <div className='rounded-2xl min-w-[15rem] desktop:min-w-[25rem] laptop:min-w-[22rem] 11inch:min-w-[20rem] 8inch:min-w-[20rem] tablet:min-w-[18rem] phone:min-w-full desktop:min-h-[250px] laptop:min-h-[250px] 11inch:min-h-[160px] 8inch:min-h-[130px] tablet:min-h-[160px] phone:min-h-[70px] '>
            <img src={getImage(src)} className='rounded-2xl object-fill ' alt={`slider-image-${index}`} />
          </div>
          </SwiperSlide>

      ))}

    </Swiper>
       
       {/* Pagination dots */}
       <div className='custom-pagination absolute -bottom-5 gap-1.5 cursor-pointer'></div>

    </div>
    </>
  );
};

export default SwiperBannerComponent