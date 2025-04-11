import getImage from '../../assets/assetsLoader'
import React from 'react'

import { easeOut, motion } from 'framer-motion'

const HeroComponent = () => {
  return (
    <>
      <motion.div className='flex justify-center items-center'
        initial={{ y: 15, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{ duration: 0.7, ease: easeOut}}
      >
        <img src={getImage('mainImg/hero.png')} className='desktop:mt-30 desktop:mb-25 laptop:mt-30 11inch:mt-25 8inch:mt-15 tablet:mt-15 phone:mt-15 desktop:w-[1100px] laptop:w-[900px] 11inch:w-[800px] 8inch:w-[700px] tablet:w-[650px] phone:w-full ' alt='home-image' />
      </motion.div>
    </>
  )
}

export default HeroComponent