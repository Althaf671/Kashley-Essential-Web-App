import getImage from '../../assets/assetsLoader'
import React from 'react'

const SearchBarComponent = () => {
  return (
    <div className='searchbar-bg sticky top-0 desktop:px-50 laptop:px-40 11inch:px-30 8inch:px-20 tablet:px-9 narrowViewport:px-9 phone:px-10 py-7 narrowViewport:overflow-x-hidden z-100'>

        <div className='searchbar-bg  searchbar-border relative flex desktop:w-[1000px] laptop:w-[900px] 11inch:w-[800px] 8inch:w-[700px] tablet:w-[600px] narrowViewport:w-[500px] phone:w-[350px] 
        desktop:h-[55px] laptop:h-[55px] 11inch:h-[50px] 8inch:h-[50px] tablet:h-[50px] narrowViewport:h-[50px] phone:h-[42px] justify-center items-center cursor-pointer rounded-4xl desktop:text-xl 
        laptop:text-xl 11inch:text-xl'
        >

            {/* Input Search Image */}
            <img src={getImage('additional/search.png')} className='absolute desktop:w-10 laptop:w-10 11inch:w-9 8inch:w-9 tablet:w-9 narrowViewport:w-6 phone:w-7  right-5' />
            {/* Input placeholder */}
            <input placeholder='Search for product' className=' w-full h-full py-3 px-5 rounded-4xl outline-none'  />
            
        </div>

    </div>
  )
}

export default SearchBarComponent