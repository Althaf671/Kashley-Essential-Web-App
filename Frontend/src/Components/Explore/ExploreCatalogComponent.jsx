import React, { useEffect, useState } from 'react'

// Library 
import axios from 'axios' // API
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const ExploreCatalogComponent = () => {
    const [products, setProducts] = useState([]);

    // API To connect with the BE 
    useEffect(() => {
        axios.get("http://localhost:5123/products")
         .then(Response => setProducts(Response.data))
         .catch(error=> console.log("Failed to fatching data:", error));
    }, []);

  return (
    <div className='flex flex-col'>
        {/* Filter Information */}
        <div className='flex mb-5'>
            <p>Showing XXX From XXX</p>
        </div>
        
        <div className='grid desktop:grid-cols-4 laptop:grid-cols-3 11inch:grid-cols-3 8inch:grid-cols-3 tablet:grid-cols-2 narrowViewport:grid-cols-2 phone:grid-cols-2 gap-5'>

            {/* Product Overview */}
            {products.map(product => (
                <Link to='/product' key={product.id}>
                    <div key={product.id} className='catalogProducts-border h-70 flex flex-col justify-center cursor-pointer'>
                    <LazyLoadImage 
                        src={product.imgURL} 
                        className='productImg-border object-cover rounded-2xl w-max p-4 h-50 ' 
                        alt='product image'
                    >
                    </LazyLoadImage>
                    <div className='flex justify-between my-2 mx-3'>

                        {/* Left Product Description */}
                        <div className='flex flex-col'>
                            <h1 className='name-text'>{product.name}</h1>
                            <p className='text-xs quantity-text'>Stock: {product.quantity}</p>
                            <p className='size-text tracking-widest text-sm mt-4 mb-2'>Size: {product.sizes}</p>
                        </div>

                        {/* Right Product Description */}
                        <div className=''>
                            <p className='price-text'>{product.currency}{product.price}</p>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
            

        </div>
    </div>
  )
}

export default ExploreCatalogComponent