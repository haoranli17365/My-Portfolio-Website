import React from 'react'
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import './About.css';

const About = () => {
  return (
    <div id="About" class="relative flex flex-col bg-gray-900 md:p-28 p-8">
        {/* About Me Title */}
        
        <div class="flex flex-col text-lg">
            <h2 class="text-gray-300 font-semibold md:text-2xl">About Me</h2>
            <div class="h-1 w-20 md:w-28 mb-8 bg-yellow-400 rounded"></div>
        </div>
        <div class="raltive flex flex-row">
            <div class="flex flex-col-reverse md:flex-row justify-center md:justify-end gap-4">
                {/* bilography */}
                <div class="flex flex-col md:mr-12 mb-4 md:mb-0 text-gray-300 text-justify md:text-lg">
                    <p class="">
                        Greetings! My name is Haoran Li. I am currently a computer science master's student at Simon Fraser University.
                        Recently, I have worked on various types of project which are related to <em>Web Developement</em>, <em>IOS Mobile Development</em> and <em>Machine Learning</em>. 
                        If you're interested, please checkout some of my recent works down below in the <a href="#Skills" class="text-yellow-400">Skills & Projects</a> section.
                    </p>
                    <br/>
                    <p class="">
                        Also, I'm open to Software Engineer Co-op opportunity.
                        If you think I'm a good fit, please feel free to reach out to me. 
                        Thank you and have a good one! &#128522;
                    </p>
                    <br/>
                    <a href="#Contact" class="text-center items-center md:w-32 w-24 py-2 text-gray-800 font-semibold rounded-lg transition-all duration-500 bg-gradient-to-tl from-red-600 via-yellow-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100">
                        Contact Me
                    </a>
                </div>
                {/* my photo */}
                <img class="profile-img m-auto mt-0 object-cover w-24 h-32 md:w-48 md:h-48 ring-4 md:ring-4 ring-yellow-400 rounded-full" src="Haoran.jpg" alt="profile-img"/>
            </div>
        </div>

        {/* education section */}
        <div class="flex flex-col text-lg">
            <h2 class="text-gray-300 font-semibold md:text-2xl md:mt-20">Education</h2>
            <div class="h-1 w-20 md:w-28 mb-12 bg-yellow-400 rounded"></div>
        </div>
        <div class="flex flex-col space-y-12 m-auto mb-8 md:mb-0">
            {/* University of maryland */}
            <div class="flex flex-col sm:flex-row sm:gap-0 gap-2 ">
                <img src="UMD.svg" class="edu-img-desktop ring-yellow-400 ring-4 rounded-xl h-16 w-16 sm:h-24 sm:w-24 sm:mr-10" alt="UMD-img"/>
                <div class="flex flex-col sm:gap-0 gap-1 ">
                    <h3 class="text-xl sm:font-semibold text-gray-300">University of Maryland</h3>
                    <p class="text-yellow-400 text-xs sm:text-xl font-light">Bachelor of Science - Computer Science</p>
                    <p class="text-gray-300 text-xs sm:text-sm font-light">August 2017 - May 2021</p>
                    <p class="text-yellow-400 text-sm">Courses: Swift Mobile Development, Data Structure, Algorthms, Java & Object-Oriented Programming</p>
                </div>
            </div>
            {/* Simon Fraser University  */}
            <div class="flex flex-col sm:flex-row sm:gap-0 gap-2 ">
                <img src="SFU.png" class="edu-img-desktop ring-yellow-400 ring-4 rounded-xl h-16 w-16 sm:h-24 sm:w-24 sm:mr-10" alt="SFU-img"/>
                <div class="flex flex-col sm:gap-0 gap-1">
                    <h3 class="text-xl sm:font-semibold text-gray-200">Simon Fraser University</h3>
                    <p class="text-yellow-400 text-sm sm:text-xl font-light">Master of Science - Computing Science in Visual Computing</p>
                    <p class="text-gray-300 text-xs sm:text-sm font-light">August 2021 - April 2023</p>
                    <p class="text-yellow-400 text-sm">Courses: Machine Learning, Distributed & Cloud System</p>
                </div>
            </div>
        </div>

        

        <Skills />

        <Contact />
    </div>
  )
}

export default About