import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';

function Home() 
{
  return (

    
    <div name = "home" 
                className = 'h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className = 'max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'> 
            <div className ='flex flex-col justify-center h-full '>

                    <h2 className = 'text-4xl sm:text-7xl font-bold text-white'> I'm a full Stack Developer 
                    </h2>
                        <p className = 'text-gray-500 py-4 max-w-md'>
                                I have 8 years of Experience building and designing software .
                                Currently, I love to work on web application using technologies
                                like React,Tailwind,Next JS and GraphQL.
                        </p>
                    <div>
                        <button> Portfolio 
                          <span> {AiOutlineArrowRight} </span>    
                        </button>
                    </div>
            </div> 

                    <div>
                      <img src = "/heroImage.png"  alt = "my profile"
                        className = 'rounded-2xl mx-auto w-2/3 md:w-full' />
                    </div>
              
        </div>
    </div>
    
  )
}

export default Home 


// 
