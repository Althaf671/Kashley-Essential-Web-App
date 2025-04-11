import getImage from '../../assets/assetsLoader'
import { useState } from 'react'

const FilterSidebarComponent = () => {

    const categories = [
        {
            name: "Men Catalog",
            options: ["Shirt", "Pants", "Bag", "Shoes", "Boots"]
        },
        {
            name: "Women Catalog",
            options: ["Shirt", "Pants", "Bag", "Shoes", "Boots"]
        },
        {
            name: "Kids Catalog",
            options: ["Shirt", "Pants", "Bag", "Shoes"]
        },
        {
            name: "Accessories Catalog",
            options: ["Belt", "Ring", "Necklace", "Bracelet"]
        },
    ];

    // To control dropdown
    const [openDropdown, setOpenDropdown] = useState(null);
   
    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null: index);
    };

  return (
    <div className='text-color desktop:flex laptop:flex 11inch:flex flex-col catalog-text filterbar-border rounded-2xl desktop:max-h-[35rem] laptop:max-h-[35rem] 
    11inch:max-h-[35rem] 11inch:max-w-full hidden p-5 select-none'>

            <h1 className='text-center mb-4'>FILTER BY:</h1>

            {categories.map((category, index) => (
            <div key={index}>

                    {/* Filter Dropdown */}
                    <div onClick={() => toggleDropdown(index)} className='flex justify-between items-center active:bg-white  desktop:pr-1 desktop:py-1l 
                    laptop:pr-1 laptop:py-1 11inch:pr-1 11inch:py-1 8inch:pr-1 8inch:py-1 tablet:pr-1 tablet:py-1 narrowViewport:pr-1 narrowViewport:py-1
                    phone:py-0.5 phone:px-0 rounded-xl cursor-pointer'>
                        <h1>{category.name}</h1>
                        <img src={getImage('additional/arrowDropdown.png')} className='w-7' alt='dropdown'/> 
                    </div>

                    {/* Dropdown */}
                    <div className={` transition-all duration-500 overflow-hidden ${ openDropdown === index ? "max-h-70 opacity-100" : "max-h-0 opacity-0"} `}>
                        <div  className='flex desktop:block laptop:block desktop:pl-3 laptop:pl-3 flex-wrap '>
                            {category.options.map((option, idx) => (
                                <label key={idx} htmlFor='' className='flex justify-baseline desktop:gap-3 laptop:gap-3 gap-1 ml-2 items-center'>
                                    <input type='checkbox' />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            
            ))}

            {/* Short by Price filter */}
            <div className='my-5'>
                <h1 className='mb-1'>Price Range:</h1>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <label>min:</label>
                        <input type='text' className='border-1 border-black rounded-sm p-1 w-14 h-6 outline-none text-sm ' />
                    </div>
                    <div className='flex gap-2'>
                        <label>max:</label>
                        <input type='text' className='border-1 border-black rounded-sm p-1 w-14 h-6 outline-none text-sm' />
                    </div>
                </div>
            </div>

            {/* Short by  Size Filter */}
            <div className='my-5'>
                <h1 className='mb-1'>Size:</h1>
                <div className='flex justify-baseline items-center gap-3'>
                    {["L", "XL", "XXL"].map((size) => (
                        <div key={size} className='flex justify-center items-center gap-1'>
                        <input type='checkbox' />
                        <label>{size}</label>
                    </div>
                    ))}
                </div>
            </div>

    </div>
  )
}

export default FilterSidebarComponent