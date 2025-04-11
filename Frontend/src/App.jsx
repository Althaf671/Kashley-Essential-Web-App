import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import Product from './Pages/Product'
import Company from './Pages/Company'
import MyOrder from './Pages/MyOrder'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Navbar from './Layout/Navbar'
import SmallNavbar from './Layout/SmallNavbar'

// Components
import LoadingCircleSpinner from './Components/Misc/LoadingCircle'

// Layout 
import Footer from './Layout/Footer'

// Context
import { NavbarProvider } from './Context/useNavbarContext'

// Custom hook to detect page changing
const usePageLoadingSpinner = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200)

    return() => clearTimeout(timeout)
  }, [location])
  return loading
}


const App = () => {

  // const loading circle spinner
  const loading = usePageLoadingSpinner();

  return (
    <div className='app-bg flex flex-col relative min-h-screen  '>
      {loading ? (
        <LoadingCircleSpinner />
      ) : ( 
      <>
      <NavbarProvider>
      <Navbar />
      <SmallNavbar />
      
        <main className='flex-grow w-full desktop:px-8 laptop:px-8 13inch:px-8 11inch:px-8 8inch:px-8 tablet:px-5 phone:px-3
         desktop:mt-5 laptop:mt-5 11inch:mt-30 8inch:mt-30 tablet:mt-30 narrowViewport:mt-30 phone:mt-30'>
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/explore' element={<Explore />} />
              <Route path='/product' element={<Product />} />
              <Route path='/company' element={<Company />} />
              <Route path='/myorder' element={<MyOrder />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
        </Routes>
        </main>

       <div className='w-full'>
       <Footer />
       </div>
      </NavbarProvider>
      </>
      )}
   
    </div>
  )
}

export default App