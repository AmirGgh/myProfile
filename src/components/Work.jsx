import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  // projects file
  const project = data;
  return (
    <div name='work' className='w-full xl:h-min text-gray-300 '>
      <div className='max-w-[1000px] mx-auto p-10 flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>
        {/* container for projects */}
        <div className='grid md:grid-cols-1 gap-4'>
          {project.map((item, index) => (
            <div key={index}>
              <div className='md:flex justify-center '>
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className='md:w-1/3 sm:w-25 h-full  shadow-lg shadow-[#040c16] group container 
              flex justify-center text-center items-center mx-auto content-div rounded'
                ></div>
                <div className='md:w-2/3 p-2  justify-center text-center	'>
                  <span className='text-2xl font bold text-white tracking-wider  '>
                    {item.name}
                  </span>
                  <p className='text-gray-200 text-sm md:text-base'>
                    {item.summary}
                  </p>
                  <div className='pt-8 text-center  '>
                    {/* eslint-disable-next-line */}
                    <a href={item.github} target='_blank'>
                      <button className=' bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-3 py-1 border-none rounded-md ml-8'>
                        Code
                      </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    {item.live && (
                      <a href={item.live} target='_blank'>
                        <button className='bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-3 py-1 border-none rounded-md ml-8'>
                          Live
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
