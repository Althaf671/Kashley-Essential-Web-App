import { useRef } from 'react'

// Library
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import getImage from '../../assets/assetsLoader';

// Images 
const images = [
  'mainImg/shopInter.webp',
  'mainImg/shop.webp',
]

const BottomComponent = () => {

  // Parallax Title
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return ( 
  <>

  {/* Custom Title */}
  <motion.div className='flex justify-center items-center desktop:mt-30 laptop:mt-30 11inch:mt-30 8inch:mt-15 tablet:mt-15 phone:mt-15'
        ref={ref}
        initial={{ x: 120, opacity: 0}}
        animate={ isInView ? { x: 0, opacity: 1} : {}}
        transition={{ duration: 1.3, ease: "easeOut"}}
      >
      <h1 className='text-color text-center desktop:text-3xl laptop:text-3xl 11inch:text-3xl 8inch:text-2xl tablet:text-2xl phone:text-xl tracking-widest'>OUR OFFLINE <span className='special-text px-4 py-1 rounded-xl'>STORE</span></h1>
  </motion.div>
    

    <div className='desktop:flex laptop:flex 11inch:flex 8inch:block tablet:block phone:block  desktop:mx-10 laptop:mx-10 11inch:mx-10 8inch:mx-10 tablet:mx-7 phone:mx-5   desktop:mt-20 laptop:mt-20 11inch:mt-20 8inch:mt-10 tablet:mt-10 phone:mt-10 justify-evenly gap-5'>
      
      {images.map((src, index) => (
      <Link className='relative group ' key={index} >
        <div className=" absolute inset-0 bg-black/40 cursor-pointer opacity-0 rounded-2xl flex justify-center items-center  transition-opacity duration-500 delay-150 group-hover:opacity-100 backdrop-blur-lg" />
        <motion.div className='absolute desktop:flex laptop:flex 11inch:flex 8inch:hidden tablet:hidden phone:hidden inset-0 justify-center items-center'
        initial={{ x: 120, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut"}}
      >
      <p className='text-color-2 text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border-1 px-6 py-1 mx-5  ' > {index === 0 ? "Shop International" : "Shop Indonesia"}</p>
      </motion.div>
        {/* Text for small display */}
        <img src={getImage(src)} className='w-[35rem] rounded-2xl mb-0 desktop:mb-0 laptop:mb-0 11inch:mb-0 8inch:mb-5 tablet:mb-5 phone:mb-5  ' alt={`shop-${index}`} />
      </Link>
      ))}

    </div>
  </>
  )
}


export default BottomComponent