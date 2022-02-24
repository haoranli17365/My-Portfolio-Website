import React from 'react'

const Contact = () => {
  return (
    <div id="Contact">
      <div class="flex flex-col text-lg">
          <h2 class="text-gray-300 font-semibold md:text-2xl md:mt-20">Contact Me</h2>
          <div class="h-1 w-24 md:w-32 mb-8 bg-yellow-400 rounded"></div>
      </div>
      <div class="flex flex-col justify-center text-center gap-8">
        <h2 class=" text-3xl  font-extrabold text-gray-300">Send Me a Email</h2>
          <form action="https://getform.io/f/1b8b0fc3-d54e-4611-8af5-2a437d95b6b6" class="flex flex-col space-y-8" method="POST">
            {/* Name Field */}
            <label for="name" class="md:flex md:flex-row md:justify-center text-yellow-400 font-extrabold">
              <h3>Your Name*</h3>
              <input id="name" name="name" class="ml-2 outline-none bg-transparent border-b-2 focus:border-b-4 border-yellow-400 text-gray-300" type='text' placeholder="....." required/>
            </label>

            {/* Subject Field */}
            <label for="subject" class="md:flex md:flex-row md:justify-center text-yellow-400 font-extrabold">
              <h3>Subject*</h3>
              <input id="subject" name="subject" class="ml-2 outline-none bg-transparent border-b-2 focus:border-b-4 border-yellow-400 text-gray-300" type='text' placeholder="....." required/>
            </label>

            {/* TextArea */}
            <div class="flex flex-col  text-center items-center">
              <label for="content" class=" text-yellow-400 font-extrabold">Your Message*</label>
              <textarea id="content" name="content" class="h-32 md:h-48 w-2/3 p-2 outline-none focus:outline-yellow-400 bg-gray-800 border-2 focus:border-4 rounded focus:border-b-4 border-yellow-400 text-gray-300" type='textarea' placeholder="....." required/>
            </div>

            {/* Submit */}
            <div class="flex justify-center">
              <button class="w-24 h-8 text-center bg-yellow-400 rounded-xl font-bold text-gray-800 transition-all duration-500 bg-gradient-to-tl from-red-600 via-yellow-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100" type="submit">Submit</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Contact