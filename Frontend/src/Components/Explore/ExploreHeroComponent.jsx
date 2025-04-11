import getImage from '../../assets/assetsLoader'
import React from 'react'

const ExploreHeroComponent = () => {
  return (
    <div className=' desktop:mt-10 laptop:mt-8 11inch:mt-6 8inch:mt-4 tablet:mt-4 phone:mt-2 desktop:w-[1200px] laptop:w-[900px] 11inch:w-[800px] 
    8inch:w-[700px] tablet:w-[600px] narrowViewport:w-[500px] phone:w-[350px] desktop:h-[30rem] laptop:h-[30rem] 11inch:h-[25rem] 8inch:h-[20rem] 
    tablet:h-[20rem] narrowViewport:h-[15rem] phone:h-[15rem] flex justify-center items-center
    '>
        
        {/* Hero Image */}
        <img src={getImage('mainImg/exploreHero.webp')} className='w-full h-full self-center object-cover rounded-3xl' alt='explore-hero' />
    
    </div>
  )
}

export default ExploreHeroComponent