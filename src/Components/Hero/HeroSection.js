import React from 'react';
import './HeroSection.css';
const HeroSection = () => {
  return (
    <div id="Hero" class="relative min-h-screen bg-gray-900 md:px-28 md:pt-28 px-10 py-8 overflow-hidden">
      {/* background grid animation */}
      <div class="absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150 ">
        {[...Array(4)].map((e, _) => {
          return (
            <div class="bg-gray-800 col-span-5 rounded animate-pulse"></div>
          )
        })}
        {[...Array(5)].map((e, _) => {
          return (
            <div class="bg-gray-800 col-span-1 rounded animate-pulse"></div>
          )
        })}
        {[...Array(2)].map((e, _) => {
          return (
            <div class="bg-gray-800 col-span-2 rounded animate-pulse"></div>
          )
        })}
        {[...Array(4)].map((e, _) => {
          return (
            <div class="bg-gray-800 col-span-4 rounded animate-pulse"></div>
          )
        })}
        {[...Array(3)].map((e, _) => {
          return (
            <div class="bg-gray-800 col-span-1 rounded animate-pulse"></div>
          )
        })}
        {[...Array(4)].map((e, _) => {
          return (
            <div class="bg-gray-800 col-span-2 first-letter:rounded animate-pulse"></div>
          )
        })}
      </div>

      {/* Typing header animation  */}
      <header className="relative flex flex-col md:gap-8 gap-4 mb-16 group">
        <h1 className="mb-1 font-mono text-4xl text-gray-300 md:text-6xl">
          Hi, I'm <br className="block md:hidden" />
          <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change">
            Haoran 👋
          </span>
          <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change"></span>
        </h1>
        <div className=" text-2xl font-semibold md:text-4xl text-yellow-400">Welcome to my portfolio page!</div>
        
        {/* fucntion button */}
        <div class="relative flex">
          <a href="#About" class="mt-10 px-4 md:px-6 py-2 md:font-bold text-gray-800 font-semibold rounded-lg transition-all duration-500 bg-gradient-to-tl from-red-600 via-yellow-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100"> 
            About Me
          </a>
        </div>
        
        {/* social media icons for mobile view*/}
        <div class="relative flex">
          <div class="flex mt-8 md:hidden">
            <a href="https://github.com/haoranli17365" class="p-2"><img class="h-7 w-7" src="github.png" alt=""/></a>
            <a href="https://www.linkedin.com/in/haoran-li-01ab8a174/" class="p-2"><img class="h-7 w-7" src="linkedin-icon.svg" alt=""/></a>
          </div>
        </div>
      </header>
      

      <div class="social-icon-desktop relative flex justify-end">
        {/* social media icons */}
        <div class="flex justify-end mt-16">
          <a href="https://github.com/haoranli17365" class="p-2 hover:scale-125"><img class="h-8" src="github.png" alt="github-icon"/></a>
          <a href="https://www.linkedin.com/in/haoran-li-01ab8a174/" class="p-2 hover:scale-125"><img class="h-8" src="linkedin-icon.svg" alt="linkedin-icon"/></a>
        </div>
      </div>
      
      {/* proceeding icon animation */}
      <div class="relative flex flex-col items-center">
        <a href="#About">
          <svg class="text-yellow-400 animate-bounce h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default HeroSection