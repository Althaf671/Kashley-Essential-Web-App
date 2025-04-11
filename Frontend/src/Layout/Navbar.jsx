import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import getImage from '../assets/assetsLoader'

import { useNavbar } from '../Context/useNavbarContext'

const Navbar = () => {

    // To control nav
    const { isNavbarVisible } = useNavbar();
    if (!isNavbarVisible) return null;

  return (
    <>

    {/* Navbar for Large and Medium Display */}
    <div className='navbar-bg desktop:flex laptop:flex 13inch:flex 11inch:hidden 8inch:hidden tablet:hidden phone:hidden justify-between items-center px-5 py-1 mb-5 '>
        {/* Left Navbar */}
        <div className='flex  gap-[2px] text-color'>

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

        {/* Logo */}
        <div>
        <img src={getImage('additional/logo.png')} className='w-[230px] rounded-2xl cursor-pointer ' alt='' />
        </div>

        {/* Right Navbar */}
        <div className='flex gap-1 justify-center items-center'>
            
            {/* Wishlist and Notification button */}
            <Link to='/wishlist'>
            <img src={getImage('additional/wishlist.png')} className='w-7 p-[1px] cursor-pointer ' alt='wishlist' />
            </Link>
            <img src={getImage('additional/notification.png')} className='w-7 cursor-pointer ' alt='notification' />

            {/* Cart */}
            <Link to='/cart' className='cart-border flex ml-1 mr-2 rounded-full px-3 py-0.5 gap-1 justify-center items-center cursor-pointer '>
                <p className='text-[13px]'>My Cart</p>
                <img src={getImage('additional/cart.png')} className='w-5' alt='cart' />
            </Link>

            {/* Login/Profile button/icon */}
            <p className='navbar-right-border w-2 h-7'></p>

            <div className='text-center'>
            <Link to='/login' className='loginBtn-bg text-white text-[16px] tracking-wider px-3 py-1 rounded-full'>Login</Link>
            </div>

        </div>
    </div>

    </>
  )
}

export default Navbar