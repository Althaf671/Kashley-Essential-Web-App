import React, { useState } from 'react'
import getImage from '../assets/assetsLoader'
import { Link, NavLink } from 'react-router-dom'

import { useNavbar } from '../Context/useNavbarContext'

const SmallNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    };

     // To control nav
    const { isNavbarVisible } = useNavbar();
        if (!isNavbarVisible) return null;

    // Toogle Filter Dropdown
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
        };

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
    <>
     {/* Navbar Small Display */}
     <div className='navbar-bg w-full relative desktop:hidden laptop:hidden 11inch:fixed 8inch:fixed tablet:fixed phone:fixed flex flex-col justify-center items-center py-1 pb-3 mb-5 z-1000'>

     {/* Logo */}
     <div>
        <img src={getImage('additional/logo.png')} className='w-[230px] rounded-2xl' alt='' />
    </div>
    
      {/* Left Navbar */}
      <div className='flex gap-[2px] 11inch:text-[1rem] 8inch:text-[1rem] tablet:text-[1rem] phone:text-[0.85rem] text-color'>

         {/* Link to Home */}
         <NavLink to='/' className='px-2 flex flex-col items-center'>
             <p>HOME</p>
             <hr className='hr-bg w-2/3 border-none h-[2px] bg-white hidden'></hr>
         </NavLink>

         {/* Link to Explore */}
         <NavLink to='/explore' className='px-2 flex flex-col items-center'>
             <p>EXPLORE</p>
             <hr className='hr-bg w-2/3 border-none h-[2px] bg-white hidden'></hr>
         </NavLink>

         {/* Link to Company */}
         <NavLink to='/company' className='px-2 flex flex-col items-center'>
             <p>COMPANY</p>
             <hr className='hr-bg w-2/3 border-none h-[2px] bg-white hidden'></hr>
         </NavLink>

         {/* Link to My Order */}
         <NavLink to='/myorder' className='px-2 flex flex-col items-center'>
             <p>MY ORDER</p>
             <hr className='hr-bg w-2/3 border-none h-[2px] bg-white hidden'></hr>
         </NavLink>
         </div>


         {/* Sidebar menu */}
         <div className='absolute top-5 left-1.5 shrink-0 cursor-pointer justify-center items-center'>
            <img onClick={() => setIsOpen(true)} src={getImage('additional/menuBtn.png')} className=' 11inch:w-8 8inch:w-7 tablet:w-7 phone:w-6' alt='menu-dropdown' />
         </div>

         <div className={`sidebar-bg z-100 fixed top-0 left-0 11inch:w-[300px] 8inch:w-[300px] tablet:w-[250px] phone:w-[250px] h-full text-center p-4 transform ${ isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-700`}>
                <p className='sidebar-text text-xl border-b-1 pb-[7px] cursor-pointer'>Menu</p>
                <button onClick={() => setIsOpen(false)} className=' w-[23px] absolute top-[17px] left-4 cursor-pointer'><img src={getImage('additional/closeBtn.png')} /></button>
                
                {/* Additional Links */}
                <div className='sidebar-text flex flex-col mt-5 gap-5 text-[15px]'>
                    <Link to='/login'>Profile</Link>
                    <Link to='/wishlist'>Wishlist</Link>
                    {/* Filter */}
                    <div className='text-color-sidebar flex flex-col sidebar-text filterbar-border
                        8inch:max-h-[26rem] 8inch:max-w-full tablet:max-h-[26rem] tablet:max-w-full narrowViewport:max-h-[26rem] 
                        narrowViewport:max-w-full phone:max-h-[28rem] phone:max-w-full px-1 select-none cursor-default'>

                                <div onClick={toggleFilter} className='flex justify-center items-center mb-2' ><p>Filter</p></div>
                                
                                <div  className={` mb-2 text-xs transition-all duration-200 overflow-hidden ${ isFilterOpen ? "max-h-70 opacity-100" : "max-h-0 opacity-0 "}`}>
                                {categories.map((category, index) => (
                                <div key={index}>

                                        {/* Filter Dropdown */}
                                        <div onClick={() => toggleDropdown(index)} className='flex justify-between items-center my-0.5 cursor-pointer'>
                                            <h1>{category.name}</h1>
                                            <img src={getImage('additional/arrowDropdownWhite.png')} className='w-7' alt='dropdown-white'/> 
                                        </div>

                                        {/* Dropdown */}
                                        <div className={` transition-all duration-500 overflow-hidden ${ openDropdown === index ? "max-h-70 opacity-100" : "max-h-0 opacity-0 "} `}>
                                            <div  className='flex desktop:block laptop:block desktop:pl-3 laptop:pl-3 flex-wrap '>
                                                {category.options.map((option, idx) => (
                                                    <label key={idx} htmlFor='' className='flex justify-baseline desktop:gap-3 laptop:gap-3 gap-1 ml-2 items-center'>
                                                        <input 
                                                            type='checkbox'
                                                            />
                                                        {option}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                
                                ))}

                                {/* Short by Price filter */}
                                <div className='my-6 text-xs cursor-default'>
                                    <h1 className='mb-3'>Price Range:</h1>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-2'>
                                            <label>min:</label>
                                            <input type='text' className='border-1 border-black bg-white text-black rounded-sm p-1 w-13 h-5 outline-none text-xs ' />
                                        </div>
                                        <div className='flex gap-2'>
                                            <label>max:</label>
                                            <input type='text' className='border-1 border-black bg-white  text-black rounded-sm p-1 w-13 h-5 outline-none text-xs' />
                                        </div>
                                    </div>
                                </div>

                                {/* Short by  Size Filter */}
                                <div className='my-6 cursor-default'>
                                    <h1 className='mb-3'>Size:</h1>
                                    <div className='flex justify-center items-center gap-3'>
                                        {["L", "XL", "XXL"].map((size) => (
                                            <div key={size} className='flex justify-center items-center gap-1'>
                                            <input 
                                                type='checkbox'
                                                className='cursor-pointer'
                                                />
                                            <label>{size}</label>
                                        </div>
                                        ))}
                                    </div>
                                </div>

                        </div>
                                </div>
                                
                </div>

            </div>

         {/* Cart and Notification icon */}
         <div className='absolute flex top-5 right-1.5 gap-0.5 justify-center items-center'>
            <img src={getImage('additional/notification.png')} className=' 11inch:w-7 8inch:w-7 tablet:w-7 phone:w-6 cursor-pointer ' alt='notification' />
            
            {/* To page Cart */}
            <Link to='/cart'>
                <img src={getImage('additional/cart.png')} className=' 11inch:w-7 8inch:w-7 tablet:w-7 phone:w-6 cursor-pointer' alt='cart' />
            </Link>
         </div>


    </div>
    
 </>

  )
}

export default SmallNavbar