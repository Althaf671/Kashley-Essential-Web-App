import { useRef } from 'react'

// Library
import { motion, useInView } from 'framer-motion'

// Images
import getImage from '../../assets/assetsLoader'
import { Link } from 'react-router-dom';

const CatalogComponent = () => {

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
    <h1 className='text-color text-center desktop:text-3xl laptop:text-3xl 11inch:text-3xl 8inch:text-2xl tablet:text-2xl phone:text-xl tracking-widest'>OUR LATEST <span className='special-text px-4 py-1 rounded-xl'>COLLECTIONS</span></h1>
    </motion.div>

    <div className='catalog-bg desktop:flex laptop:flex 11inch:flex 8inch:block tablet:block phone:block desktop:mt-20 laptop:mt-20 
    11inch:mt-20 8inch:mt-10 tablet:mt-10 phone:mt-10 desktop:mx-10 laptop:mx-10 11inch:mx-10 8inch:mx-10 tablet:mx-7 phone:mx-5 
    desktop:gap-15 laptop:gap-12 11inch:gap-7'
    >
      
    {/* Left Catalog */}
    <div className='desktop:w-[40rem] laptop:w-[40rem] 11inch:w-[25rem] 8inch:w-full tablet:w-full phone:w-full '>
      <p className='desktop:text-justify laptop:text-justify 11inch:text-justify 8inch:text-center tablet:text-center phone:text-center 
      text-xl text-size'
      >
        Explore our exclusive catalog featuring a diverse collection for Men, Women, Kids, and Accessories. 
        From stylish menswear that exudes confidence to elegant and trendy women’s fashion, we have curated pieces that suit every occasion. 
        Let your little ones shine with our charming kids’ collection, designed for comfort and style. Complete your look with our premium accessories, from sleek belts to statement bags, adding the perfect finishing touch to your outfit. 
        Discover fashion that speaks to you and elevate your wardrobe with our carefully crafted selections.
      </p>
      <div>
        <h1 className='mt-5 mb-1'>Availabe Size:</h1>
        <ul className='flex gap-5'>
          <li className='size-border cursor-default px-3'>L</li>
          <li className='size-border cursor-default px-3'>XL</li>
          <li className='size-border cursor-default px-3'>XXL</li>
        </ul>
      </div>
    </div>

    {/* Right Catalog  */}
    <div className='relative grid desktop:grid-cols-2 desktop:grid-rows-2 laptop:grid-cols-2 laptop:grid-rows-2 11inch:grid-cols-2 11inch:grid-rows-2 
    w-full 8inch:grid-cols-1 8inch:grid-rows-4 tablet:grid-cols-1 tablet:grid-rows-4 phone:grid-cols-1 phone:grid-rows-4 desktop:min-h-[500px] 
    laptop:min-h-[400px] 11inch:min-h-[400px] 8inch:min-h-[1100px] tablet:min-h-[1000px] phone:min-h-[900px] desktop:min-w-[20rem] laptop:min-w-[18rem] 
    11inch:min-w-[16rem] 8inch:min-w-[full] tablet:min-w-full phone:min-w-full justify-center items-center text-center desktop:mt-0 laptop:mt-0 
    11inch:mt-0 8inch:mt-5 tablet:mt-5 phone:mt-12'
    >

      {/* Phone hover direction */}
      <p className='desktop:hidden laptop:hidden 11inch:hidden 8inch:hidden tablet:hidden narrowViewport:hidden phone:block absolute -top-6 left-1/3 text-xs tracking-wider opacity-30 italic '>
        Hold the Catalog
      </p>

      <Link to='/explore' className='catalog-font small-display-rounded-top img-rounded-top-left cursor-pointer group relative bg-cover bg-center bg-no-repeat h-full ' style={{ backgroundImage: `url(${getImage('mainImg/menCatalog.webp')})` }} >
         {/* Blurred Overlay on Hover */}
        <div className="small-display-rounded-top absolute inset-0 bg-black/30 img-rounded-top-left opacity-0 flex justify-center items-center  transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-lg">
        <p className='text-color-2 text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border-1 px-3 py-1 mx-5'>Men Catalog</p>
        </div>
      </Link>

      <Link to='/explore' className='catalog-font img-rounded-top-right cursor-pointer group relative bg-cover bg-center bg-no-repeat h-full ' style={{ backgroundImage: `url(${getImage('mainImg/womenCatalog.webp')})` }} >
         {/* Blurred Overlay on Hover */}
        <div className="absolute inset-0 bg-black/30 img-rounded-top-right opacity-0 flex justify-center items-center transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-lg">
        <p className='text-color-2 text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border-1 px-3 py-1 mx-5'>Women Catalog</p>
        </div>
      </Link>

      <Link to='/explore' className='catalog-font img-rounded-bottom-left cursor-pointer group relative bg-cover bg-center bg-no-repeat h-full ' style={{ backgroundImage: `url(${getImage('mainImg/kidCatalog.webp')})` }} >
         {/* Blurred Overlay on Hover */}
        <div className="absolute inset-0 bg-black/30 img-rounded-bottom-left opacity-0 flex justify-center items-center transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-lg">
        <p className='text-color-2 text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border-1 px-3 py-1 mx-5'>Kids Catalog</p>
        </div>
      </Link>

      <Link to='/explore' className='catalog-font small-display-rounded-bottom img-rounded-bottom-right cursor-pointer group relative bg-cover bg-center bg-no-repeat h-full ' style={{ backgroundImage: `url(${getImage('mainImg/accessoriesCatalog.webp')})` }} >
         {/* Blurred Overlay on Hover */}
        <div className="small-display-rounded-bottom absolute inset-0 bg-black/30 img-rounded-bottom-right opacity-0 flex justify-center items-center transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-lg">
        <p className='text-color-2 text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border-1 px-3 py-1 mx-5'>Accessories Catalog</p>
        </div>
      </Link>

    </div>

    </div>
    </>
  )
}

export default CatalogComponent