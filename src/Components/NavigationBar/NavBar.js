import React, { useState } from 'react';
import './NavBar.css';
function NavBar() {
  const [menu, setMenu] = useState(false)

  return (
    <nav class="sticky top-0 z-50 bg-gray-800">
      <div class="max-full md:mx-4 px-4 md:px-8 sm:px-6"> {/* define navigation bar size */}
        <div class="flex justify-between">
          
          <div class="flex space-x-4 text-gray-300"> {/* navbar left side: Logo and nav group */}
            <div class="pr-3">
              <a href="/#" class="flex items-center py-3 px-3 text-yellow-400">
                <svg class="h-6 w-6 mr-1" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-extrabold text-lg">Haoran Li's Portfolio</span>
              </a>
            </div>
            
            {/* Left side navigation group */}
            <div class="hidden md:flex items-center space-x-5 text-lg "> 
              <a href='/#' class="hover:text-yellow-400 link-underline link-underline-black ">Home</a>
              <a href='#About' class="hover:text-yellow-400 link-underline link-underline-black ">About Me</a>
              <a href='#Skills' class="hover:text-yellow-400 link-underline link-underline-black ">Skills & Projects</a>
            </div>
          </div>
          
          {/* secondary nav group */}
          <div class="hidden md:flex items-center space-x-1">
            <a href="#Contact" class="px-5  py-1 text-gray-800 text-lg font-semibold rounded-lg transition-all duration-500 bg-gradient-to-tl from-red-600 via-yellow-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100">
              Hire Me
            </a>
          </div>

          {/* mobile button */}
          <div class="md:hidden flex items-center" onClick={() => setMenu(!menu)}>
            <button class="mobile-menu-button text-yellow-400">
              { menu ? 
              <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              :
              <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              }
            </button>
          </div>

        </div>
      </div>
      {/* mobile menu items */}
      { menu && (
        <div class="mobile-menu md:hidden z-1 text-center font-semibold">
        <a href="/#" class="block py-2 text-gray-300 text-sm hover:bg-yellow-400 hover:text-gray-800">Home</a>
        <a href="#About" class="block py-2 text-gray-300 text-sm hover:bg-yellow-400 hover:text-gray-800" >About Me</a>
        <a href="#Skills" class="block py-2 text-gray-300 text-sm hover:bg-yellow-400 hover:text-gray-800">Skills & Projects</a>
        <a href="#Contact" class="block py-2 text-gray-300 text-sm hover:bg-yellow-400 hover:text-gray-800">Contact</a>
        </div>
      )}
      
    </nav>
  )
}

export default NavBar;