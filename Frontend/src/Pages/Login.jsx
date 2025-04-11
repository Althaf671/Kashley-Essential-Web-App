import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavbar } from '../Context/useNavbarContext';
import getImage from '../assets/assetsLoader';

const Login = () => {

  // To Login with Google
  const loginWithGoogle = () => {
    window.location.href = "http://localhost:5123/auth/google";
  };

  // To hide nav
  const { setIsNavbarVisible } = useNavbar();
  const location = useLocation();

  useEffect(() => {
    setIsNavbarVisible(true);
    return() => setIsNavbarVisible(false)
  }, [location]);

  return (
    <div className='flex  justify-center items-center'>
      
      {/* Inner Container */}
      <div className="relative flex desktop:w-[70rem] laptop:w-[60rem] 11inch:w-[50rem] desktop:m-20 laptop:m-20 11inch:m-20 8inch:m-15 m-10 -mb-5 rounded-3xl">

        {/* Login Image */}
        <div className='desktop:block laptop:block 11inch:block 8inch:hidden tablet:hidden narrowViewport:hidden phone:hidden  '>
            <img src={getImage('mainImg/menCatalog.webp')} className='desktop:w-[50rem] laptop:w-[50rem] 11inch:w-[50rem] desktop:h-[35rem] laptop:h-[30rem] 11inch:h-[30rem] 8inch:h-[27rem] tablet:h-[27rem] narrowViewport:h-[27rem] phone:h-[27rem] rounded-l-3xl ' />
        </div>

        <div>
              {/* Form */}
            <div className='login-container rounded-r-3xl flex flex-col justify-center w-full desktop:h-[35rem] laptop:h-[30rem] 11inch:h-[30rem] 8inch:h-[27rem] tablet:h-[27rem] narrowViewport:h-[27rem] phone:h-[27rem] desktop:px-15 laptop:px-10 11inch:px-10 px-15 py-10 items-center '>
                {/* Login Box */}
                <div className="login-box flex flex-col justify-center items-center">
                  <h2 className='text-3xl desktop:mb-6.5 laptop:mb-6.5 11inch:mb-6.5 mb-2 tracking-widest'>LOGIN</h2>

                  {/* Input Username and Password */}
                  <div className="input-box flex flex-col">
                    <input placeholder='Email' className='bg-input-login border-b-2 w-[16rem] desktop:my-5 laptop:my-5 my-3 px-2 py-1 border-black outline-none ' />
                    <input placeholder='Password' className='bg-input-login border-b-2 w-[16rem] desktop:my-5 laptop:my-5 my-3 px-2 py-1 border-black outline-none ' />
                  </div>
                  
                  {/* Additional Buttons */}
                  <div className="additional-btns flex justify-between w-full ">
                    {/* Remember me */}
                    <div className='flex justify-center items-center gap-1 text-remember-me'>
                      <input 
                        type='checkbox'
                        className='cursor-pointer'
                      />
                      Remember me
                    </div>
                    {/* Forgot Password */}
                    <div className='text-forget-password'>
                      <p>Forgot Password</p>
                    </div>
                  </div>

                  {/* Login Button */}
                  <div className='flex flex-col dekstop:mt-15 laptop:mt-15 11inch:mt-10 mt-10 gap-4'>
                    <button className='border-login-btn bg-btn-login text-login login-btn-border px-4.5 py-1.5 rounded-3xl'>LOGIN</button>
                    <button onClick={loginWithGoogle} className='border-login-btn text-login-with-google w-full flex justify-center items-center gap-2 px-4 py-2 rounded-3xl'>Login with <img src={getImage('additional/googleWord.webp')} className='w-15'/></button>
                  </div>

                  {/* Create Account */}
                  <p className='text-register mt-4'>Doesn't have an account? <span className='register'>Register</span></p>

                </div>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Login