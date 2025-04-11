import { useRef } from 'react'
import { Link } from 'react-router-dom';

// Library
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/effect-fade';

import getImage from '../../assets/assetsLoader';

const testimonials = [
  {
    name: 'Althaf',
    review: 'The quality exceeded my expectations—comfortable, stylish, and worth every penny! I’ve never felt this confident wearing something so effortlessly elegant.',
    avatar: 'additional/avatar1.png',
    job: 'Fullstack Developer',
    date: '24/02/2025',
    id: '1'
  },
  {
    name: 'Kayla',
    review: 'Absolutely love it! The craftsmanship is superb, and it fits like a dream. Definitely a must-have in your wardrobe!',
    avatar: 'additional/avatar2.png',
    job: 'Doctor',
    date: '27/02/2025',
    id: '2'
  },
  {
    name: 'Chani',
    review: 'Amazing attention to detail and high-quality materials. It makes me feel stylish without even trying!',
    avatar: 'additional/avatar3.png',
    job: 'Law Specialist',
    date: '01/03/2025',
    id: '3'
  },
  {
    name: 'Nuha',
    review: 'This service exceeded my expectations! The design is sleek, the performance is smooth, and the support is outstanding. Highly recommended!',
    avatar: 'additional/avatar4.png',
    job: 'Architect',
    date: '05/03/2025',
    id: '4'
  },
];

const SwiperTestimonialComponent = () => {
  
  // Parallax Title
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Swiper ref
  const swiperRef = useRef(null);

  return ( 
  <>

  {/* Custom Title */}
  <motion.div className='flex flex-col text-center justify-center items-center desktop:mt-30 laptop:mt-30 11inch:mt-30 8inch:mt-15 tablet:mt-15 phone:mt-15'
        ref={ref}
        initial={{ x: -120, opacity: 0}}
        animate={ isInView ? { x: 0, opacity: 1} : {}}
        transition={{ duration: 1.3, ease: "easeOut"}}
      >
      <h1 className='text-color text-center desktop:text-3xl laptop:text-3xl 11inch:text-3xl 8inch:text-2xl tablet:text-2xl phone:text-xl tracking-widest'>THE MARK OF <span className='special-text px-4 py-1 rounded-xl'>SATISFICATION</span></h1>
      <p className='desktop:mx-30 laptop:mx-30 11inch:mx-30 8inch:mx-30 tablet:mx-21 phone:mx-5 desktop:mt-10 laptop:mt-10 11inch:mt-8 tablet:mt-8 phone:mt-5 text-xl text-size '>Perfect fit, premium comfort, and timeless style—our apparel is crafted to elevate your everyday look. Loved by those who value both aesthetics and quality, each piece is made to make you feel your absolute best.</p>
  </motion.div>
    

    <div className='relative w-full desktop:h-[40rem] laptop:h-[40rem] 11inch:h-[40rem] 8inch:h-[30rem] tablet:h-[25rem] phone:h-[25rem] desktop:flex laptop:flex 11inch:flex 8inch:block tablet:block phone:block desktop:justify-between laptop:justify-between 11inch:justify-between justify-center items-center desktop:mx-10 laptop:mx-10 11inch:mx-10 8inch:mx-0 tablet:mx-0 phone:mx-0  desktop:mt-5 laptop:mt-5 11inch:mt-5 8inch:mt-5 tablet:mt-5 phone:mt-3 '>
      
        {/* Left Testimonial */}
        <div  className=' desktop:max-w-[25rem] laptop:max-w-[20rem] 11inch:max-w-[15rem] 8inch:w-full tablet:w-full phone:w-full  flex flex-col justify-center items-center gap-5 z-120  '>

              <Swiper className='desktop:w-[27rem] laptop:w-[23rem] 11inch:w-[18rem] 8inch:w-full tablet:w-full phone:w-[85%] '
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={600}
                modules={[Navigation, EffectFade]}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >

                  {/* Testimonial Card */}
                  {testimonials.map((testimonials, index) => (
                    <SwiperSlide key={index}>
                    <div className='relative flex flex-col card-shadow bg-white desktop:max-w-[25rem] laptop:max-w-[22rem] 11inch:max-w-[15rem] 8inch:max-w-full tablet:max-w-full phone:max-w-full desktop:h-[350px] laptop:h-[350px] 11inch:h-[400px] phone:h-[300px] p-7 rounded-3xl gap-2'>
                        {/* Upper card */}
                        <div className='desktop:flex laptop:flex 11inch:block 8inch:flex tablet:flex phone:flex justify-between items-center text-left mb-2'>
                        
                        <p className='testimonial-job-text'>Reviewed on {testimonials.date}</p>
                        
                        <div className='flex 11inch:mt-1'>
                          {[...Array(5)].map((_, i) => (
                             <img key={i} src={getImage('additional/star.png')} className='desktop:w-7 desktop:h-7 laptop:w-7 laptop:h-7 11inch:w-7 11inch:h-7 8inch:w-6 8inch:h-6 tablet:w-6 tablet:h-6 phone:w-6 phone:h-6' alt='rate-star' />
                          ))}
                        </div>
                      </div>
      
                      {/* Middle card */}
                      <p className='testimonial-card-text phone:text-xs italic'>"{testimonials.review}"</p>
                      
                      {/* Bottom card */}
                      <div className='absolute bottom-7 left-7 flex justify-baseline items-center gap-3'>
                        <img src={getImage(testimonials.avatar)} className='w-12 h-12 rounded-full border-1 p-1' alt='customer-avatar' />
                        <div className='flex flex-col'>
                          <p className='testimonial-name-text'>{testimonials.name}</p>
                          <p className='testimonial-job-text tracking-wide -mt-1'>{testimonials.job}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  ))}
              </Swiper>

              <p className='additional-text font-bold -mt-2 -mb-2 px-3'>What they say about us?</p>

              {/* Navigation button*/}
              <div className='flex gap-5'>
                  <img src={getImage('additional/arrowBack.png')} onClick={() => swiperRef.current?.slidePrev()} className=' w-10 h-10 cursor-pointer active:opacity-75 bg-white rounded-full p-1 button-shadow' alt='arrow-back' />
                  <img src={getImage('additional/arrowForward.png')} onClick={() =>  swiperRef.current?.slideNext()} className=' w-10 h-10 cursor-pointer active:opacity-75 bg-white rounded-full p-1 button-shadow' alt='arrow-forward' />
              </div>

        </div>

        {/* Right Testimonial */}
        <div className='relative w-full desktop:flex laptop:flex 11inch:flex 8inch:hidden tablet:hidden phone:hidden '>
            <img src={getImage('mainImg/testimonialBg.webp')} className='absolute w-full left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 ' alt='testimonial-bg' />
            <Link to='/explore' className='CTA-btn CTA-btn-text absolute left-1/2 -translate-x-1/2 desktop:mt-30 laptop:mt-25 11inch:mt-20 py-2 px-5 cursor-pointer'>EXPERIENCE TRUE COMFORT</Link>
        </div> 

    </div>
      

  </>
  )
}

export default SwiperTestimonialComponent