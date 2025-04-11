import React from 'react'

const LoginComponent = () => {
  return (
    <div>LoginComponent</div>
  )
}

export default LoginComponent

{/* Men Filter Dropdown */}
{[...Array[4]].map((_, i) => (
  <div className='flex justify-between'>
  <h1>Men Catalog</h1>
  <img key={i} src={getImage('additional/arrowDropdown.png')} className='w-7' alt='dropdown'/> 
</div>
))}