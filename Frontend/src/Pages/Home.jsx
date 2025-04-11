import React from 'react'
import { BottomComponent, CatalogComponent, HeroComponent, SwiperBannerComponent, SwiperTestimonialComponent } from '../Components/Home'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <HeroComponent />
      <SwiperBannerComponent />
      <CatalogComponent />
      <SwiperTestimonialComponent />
      <BottomComponent />
    </div>
  )
}

export default Home