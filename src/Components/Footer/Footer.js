import React from 'react'
import { info } from '../../Content/info';
import './Footer.css';

const Footer = () => {
  return (
    <div id="footer" class=" border-t-4 border-yellow-400 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* footer content  */}
      <div class="p-4 flex flex-col text-center items-center gap-8 md:gap-0 md:items-start md:text-left md:flex-row md:justify-around">
        {/* page redirect links */}
        <div class="flex flex-col justify-items-center text-yellow-400 font-light gap-2 ">
          <h1 class="font-semibold">Links</h1>
          <a href="#" class="hover:text-yellow-300  text-sm">Home</a>
          <a href="#About" class="hover:text-yellow-300 text-sm">About Me</a>
          <a href="#Skills" class="hover:text-yellow-300 text-sm">Skills & Projects</a>
          <a href="#Contact" class="hover:text-yellow-300 text-sm">Contact Me</a>
        </div>
        <div class="md:hidden h-px w-3/6 bg-yellow-400 rounded"></div>
        {/* social media links  */}
        <div class="flex flex-col text-left gap-4 font-semibold text-yellow-400">
          <h1>Social Media</h1>
          <div class="flex flex-row gap-2">
            <a href="https://github.com/haoranli17365"><img src="github.png" class="h-6 w-6 hover:scale-105" /></a>
            <a href="https://www.linkedin.com/in/haoran-li-01ab8a174/"><img src="linkedin-icon.svg" class="h-6 w-6 hover:scale-105"/></a>
          </div>  
        </div>
        <div class="div-line w-px h-40 bg-yellow-400 rounded"></div>

        <div class=" md:hidden h-px w-3/6 bg-yellow-400 rounded"></div>
        {/* Contact info */}
        <div class="flex flex-col text-yellow-400 font-semibold gap-4">
         <h1>My Contact Information</h1>
         <div class="flex flex-row text-xs md:text-sm font-light md:justify-start justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className=" md:h-5 md:w-5 h-4 w-4 mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p class="select-none">Email: {info['email']}</p> 
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-3 w-3 md:mt-0  md:h-5 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <p class="select-none">{info['domain']}</p>
         </div>
         <div class="flex flex-row text-xs md:text-sm font-light md:justify-start justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="md:h-5 md:w-5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <p class="select-none">Phone: +1 {info['mobile_three']}</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="md:h-6 md:w-2 h-4 w-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18 12H6" />
          </svg>
          <p class="select-none">{info['mobile_mid_three']}</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="md:h-6 md:w-2 h-4 w-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18 12H6" />
          </svg>
          <p class="select-none">
            {info['mobile_last_four']}
          </p>
         </div>
        </div>
      </div>
      
      {/* copyright  */}
      <div class="px-4 flex flex-col text-gray-300 md:font-light md:text-sm text-xs">
        <div class="w-full h-px bg-yellow-400 rounded"></div>
        <div class="px-4 py-2 flex flex-row justify-end">
          <p class="mr-1">Made with passion & </p>
          <svg xmlns="http://www.w3.org/2000/svg" className=" text-red-500 h-4 w-4 md:h-5 md:w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <p class="ml-1">&copy; 2022 by Haoran Li</p>
        </div>

      </div>

    </div>
  )
}

export default Footer