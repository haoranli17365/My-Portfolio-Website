import React from 'react'
import { projects } from '../../Content/projects';

const Skills = () => {
  return (
    <div id="Skills" class="relative flex flex-col">
      <div class="flex flex-col text-lg">
          <h2 class="text-gray-300 font-semibold md:text-2xl md:mt-20">Skills & Projects</h2>
          <div class="h-1 w-32 md:w-44 mb-8 rounded bg-yellow-400"></div>
      </div>
      <div class="flex flex-row flex-wrap sm:justify-between justify-center gap-8 md:mb-0 mb-8">
        { projects.map( (e, _) =>{
          return (
            <Card name={e.name} description_1={e.description_1} description_2={e.description_2} url={e.url} />
          )
        })}
      </div>
      
    </div>
  )
}

const Card = (props) => {
  return (
    <div class="relative  w-64">
        {/* yellow background */}
        <div class="absolute -right-3 -bottom-3 bg-yellow-400 h-full w-full rounded-xl"></div>

        {/* Card Content */}
        <div class="relative bg-gray-800 text-gray-300 rounded-xl p-5 space-y-5">
          {/* Yellow Line  */}
          <div class="h-1 w-20 bg-yellow-400 rounded"></div>
          {/* Title */}
          <div class="md:font-bold md:text-lg text-yellow-400">
            {props.name}
          </div>
          {/* description */}

          <ul class="text-xs md:text-sm md:max-h-48">
            <li class="mb-2">{props.description_1}</li>
            <li >{props.description_2}</li>
          </ul>

          {/* Learn More */}
          <a href={props.url} class="inline-flex gap-2 text-yellow-400 hover:text-yellow-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4 justify-inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Learn More
          </a>
        </div>
      </div>
  )
}
export default Skills