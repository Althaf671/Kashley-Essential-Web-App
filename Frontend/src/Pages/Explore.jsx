import React from 'react'
import { SearchBarComponent, ExploreHeroComponent, FilterSidebarComponent, ExploreCatalogComponent } from '../Components/Explore'

const Explore = () => {
  return (
    <div className='flex flex-col relative justify-center items-center overflow-x-hidden
    '
    >
      {/* Upper Component */}
      <SearchBarComponent />
      <ExploreHeroComponent />

      {/* Lower Component */}
      <div className='desktop:grid laptop:grid 11inch:grid 8inch:flex tablet:flex narrowViewport:flex phone:flex flex-col desktop:grid-cols-[250px_1fr] 
      laptop:grid-cols-[250px_1fr] gap-10 mt-10 desktop:mx-25 laptop:mx-10 11inch:mx-10 8inch:mx-10 tablet:mx-7 phone:mx-0 '>
        <FilterSidebarComponent />
        <ExploreCatalogComponent />
      </div>

    </div>
  )
}

export default Explore