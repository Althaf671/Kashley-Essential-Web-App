import { useState } from 'react'
import { Link } from 'react-router-dom'
import getImage from '../assets/assetsLoader'


const Footer = () => {

    // To control dropdown
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null: index);
    };

  return (
    <div className='flex flex-col text-center w-full pt-12 mt-35 bg-cover bg-center bg-no-repeat backdrop-blur-xl' style={{ backgroundImage: `url(${getImage('mainImg/footerImg2.webp')})` }}>
       {/* Overlay Blur */}
       <div className="absolute inset-0 footer-bg-blur bg-black/60"></div>
      {/* Footer Header */}
      <div className='mb-10 flex flex-col text-footer-header justify-center items-center z-100'>
      <h1>“Step in and explore the unseen”</h1>
        <p className='text-xs mb-14'>Immerse yourself in a world of style, inspiration, and exclusive updates by exploring our Instagram.</p>
        <a href='https://www.instagram.com' target='next_blank' className='flex instagram-font justify-evenly rounded-full items-center cursor-pointer border-1 p-2.5 w-[210px]'>Visit our Instagram<img src={getImage('additional/visitBtn.png')} className='w-5 h-5' alt='visit-button' /> </a>
      </div>

      {/* Big Display Footer */}
      <div className='relative inner-footer-bg desktop:flex laptop:flex 11inch:flex 8inch:hidden tablet:hidden phone:hidden desktop:justify-evenly laptop:justify-evenly 11inch:justify-evenly mx-20 mt-8 pt-10 pb-55'>

        {/* Customer Services */}
        <div className='flex flex-col text-left'>
          <h1 className='footer-text-title'>CUSTOMER SERVICE</h1>
          <Link to='/company' className='footer-text max-w-0'>Message</Link>
          <Link to='/company' className='footer-text max-w-0 '>FAQs</Link>
          <Link to='/company' className='footer-text min-w-0 '>Email Us</Link>
          <Link to='/company' className='footer-text min-w-0'>Track Product</Link>
        </div>

        {/* About Us */}
        <div className='flex flex-col text-left'>
          <h1 className='footer-text-title'>ABOUT US</h1>
          <Link to='/company' className='footer-text min-w-0'>Kashley Essentials</Link>
          <Link to='/company' className='footer-text min-w-0'>Privacy Policies</Link>
          <Link to='/company' className='footer-text min-w-0'>Cookies Setting</Link>
          <Link to='/company' className='footer-text min-w-0'>Career</Link>
        </div>

        {/* Social Media */}
        <div className='flex flex-col text-left'>
          <h1 className='footer-text-title'>SOCIAL MEDIA</h1>
          <Link to='/company' className='footer-text max-w-0'>Instagram</Link>
          <Link to='/company' className='footer-text max-w-0'>TikTok</Link>
          <Link to='/company' className='footer-text max-w-0'>Facebook</Link>
          <Link to='/company' className='footer-text max-w-0'>X</Link>
          <Link to='/company' className='footer-text max-w-0'>YouTube</Link>
          <Link to='/company' className='footer-text max-w-0'>Threads</Link>
        </div>

        {/* In Partner */}
        <div className='flex flex-col text-left'>
          <h1 className='footer-text-title'>IN PARTNER</h1>
          <Link className='footer-text'>Altza Apparel</Link>
          <Link className='footer-text'>ABC Company</Link>
          <Link className='footer-text'>National Bank</Link>
        </div>
        

        {/* Mobile Apps */}
        <div className='absolute bottom-3 right-10 flex flex-col justify-center items-center'>
          <h1 className='text-[13px] tracking-wide'>Get Mobile Apps</h1>
          <div className='flex gap-3 justify-center items-center'>
            <img src={getImage('additional/androidLogo.png')} className='w-10 h-10 cursor-pointer' alt='android-logo' />
            <img src={getImage('additional/ios-white.svg')} className='mobile-apps-bg rounded-xl p-1 w-10 h-8 cursor-pointer' alt='ios-logo' />
          </div>
        </div>

      </div>

      {/* Small Display Footer */}
      <div className='hidden flex-col 11inch:hidden 8inch:flex tablet:flex phone:flex justify-center items-center z-110'>

        {/* Customer Services Dropdown */}
        <div onClick={() => toggleDropdown(0)}>
            <h1 className='footer-text-title-dropdown relative py-5 tracking-widest cursor-pointer select-none border-t-1 font-bold  w-screen'>CUSTOMER SERVICE<img src={getImage('additional/plusBtn.png')} className='w-7 h-7 absolute right-5 8inch:top-4 tablet:top-4 phone:top-4' alt='dropdown-button' /></h1>
            {/* Dropdown */}
            <div className={` transition-all duration-500 ease-in-out overflow-hidden ${ openDropdown === 0 ? "max-h-70 opacity-100" : "max-h-0 opacity-0"} `}>
                <div className='footer-text-title-dropdown flex flex-col '>
                    <Link to='/company' className='dropdown-text select-none py-4'>Message</Link>
                    <Link to='/company' className='dropdown-text select-none py-4 '>FAQs</Link>
                    <Link to='/company' className='dropdown-text select-none py-4 '>Email Us</Link>
                    <Link to='/company' className='dropdown-text select-none py-4'>Track Product</Link>
                </div>
            </div>
        </div>
 
        {/* About Us Dropdown */}
        <div onClick={() => toggleDropdown(1)}>
            <h1 className='footer-text-title-dropdown relative py-5 tracking-widest cursor-pointer select-none border-t-1 font-bold  w-screen'>ABOUT US<img src={getImage('additional/plusBtn.png')} className='w-7 h-7 absolute right-5 8inch:top-4 tablet:top-4 phone:top-4' alt='dropdown-button' /></h1>
            {/* Dropdown */}
            <div className={` transition-all duration-500 ease-in-out overflow-hidden ${ openDropdown === 1 ? "max-h-70 opacity-100" : "max-h-0 opacity-0"} `}>
                <div className='footer-text-title-dropdown flex flex-col '>
                    <Link to='/company' className='dropdown-text select-none py-4'>Message</Link>
                    <Link to='/company' className='dropdown-text select-none py-4 '>FAQs</Link>
                    <Link to='/company' className='dropdown-text select-none py-4 '>Email Us</Link>
                    <Link to='/company' className='dropdown-text select-none py-4'>Track Product</Link>
                </div>
            </div>
        </div>

        {/* Social Media Dropdown */}
        <div onClick={() => toggleDropdown(2)}>
            <h1 className='footer-text-title-dropdown relative py-5 tracking-widest cursor-pointer select-none border-t-1 font-bold  w-screen'>SOCIAL MEDIA<img src={getImage('additional/plusBtn.png')} className='w-7 h-7 absolute right-5 8inch:top-4 tablet:top-4 phone:top-4' alt='dropdown-button' /></h1>
            {/* Dropdown */}
            <div className={` transition-all duration-500 ease-in-out overflow-hidden ${ openDropdown === 2 ? "max-h-70 opacity-100" : "max-h-0 opacity-0"} `}>
                <div className='footer-text-title-dropdown flex flex-col '>
                    <Link to='/company' className='dropdown-text select-none py-4'>Message</Link>
                    <Link to='/company' className='dropdown-text select-none py-4 '>FAQs</Link>
                    <Link to='/company' className='dropdown-text select-none py-4 '>Email Us</Link>
                    <Link to='/company' className='dropdown-text select-none py-4'>Track Product</Link>
                </div>
            </div>
        </div>

        {/* In Partner Dropdown */}
        <div onClick={() => toggleDropdown(3)}>
            <h1 className='footer-text-title-dropdown relative py-5 tracking-widest cursor-pointer select-none border-t-1 border-b-1 font-bold w-screen'>IN PARTNER<img src={getImage('additional/plusBtn.png')} className='w-7 h-7 absolute right-5 8inch:top-4 tablet:top-4 phone:top-4' alt='dropdown-button' /></h1>
            {/* Dropdown */}
            <div className={` transition-all duration-500 ease-in-out overflow-hidden ${ openDropdown === 3 ? "max-h-70 opacity-100" : "max-h-0 opacity-0"} `}>
                <div className='footer-text-title-dropdown flex flex-col '>
                    <Link to='/company' className='dropdown-text select-none py-4'>Message</Link>
                    <Link to='/company' className='dropdown-text select-none py-4 '>FAQs</Link>
                    <Link to='/company' className='dropdown-text select-none py-4 '>Email Us</Link>
                    <Link to='/company' className='dropdown-text select-none py-4'>Track Product</Link>
                </div>
            </div>
        </div>

        {/* Mobile Apps */}
        <div className='flex flex-col justify-center items-center mt-7'>
          <h1 className='text-[13px] text-footer-header tracking-wide mb-1'>Get Mobile Apps</h1>
          <div className='flex gap-3 justify-center items-center'>
            <img src={getImage('additional/androidLogo.png')} className='mobile-apps-android-bg p-1 rounded-2xl w-12 h-10 cursor-pointer' alt='android-logo' />
            <img src={getImage('additional/ios-white.svg')} className='w-12 h-12 cursor-pointer' alt='ios-logo' />
          </div>
        </div>

      </div>

      {/* Lower Footer */}
      <div className='flex lower-footer-border justify-center items-center desktop:my-12 laptop:my-12 11inch:my-12 8inch:my-5 tablet:my-5 phone:my-5 z-100 '>
        <p className=' text-[12px] text-[rgba(255,255,255,0.5)]'>© 2025 Kashley Essential All rights reserved.</p>
      </div>

    </div>

  )
}

export default Footer