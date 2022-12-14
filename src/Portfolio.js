import React from 'react';


 function Portfolio() 
 {

    const portfolio = [
        {
            id: 1,
            src : '/assets/portfolio/reactWeather.jpg'
        },
        {
            id: 2,
            src : '/assets/portfolio/arrayDestruct.jpg'
        },
        {
            id: 3,
            src : '/assets/portfolio/installNode.jpg'
        },
        {
            id: 4,
            src : '/assets/portfolio/navbar.jpg'
        },
        {
            id: 5,
            src : '/assets/portfolio/reactParallax.jpg'
        },
        {
            id: 6,
            src : '/assets/portfolio/reactSmooth.jpg'
        },
        
    ]


  return (
    <div
    name = "portfolio"
    className  = 'bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 '> Portfolio  </p>
                    <p className='py-6'> Check out some of my work right here  </p>
                </div>


                 
                <div  className = "grid sm:grid-cols-2  gap-18 md:grid-cols-3 gap-18 sm:px-0">

                    {portfolio.map(({id,src}) =>
                                    (
                            <div  key = {id} 
                             className = 'shadow-md shadow-gray-600 rounded-lg'>
                                    <img src = {src} 
                                    alt = ""
                                    className='rounded-md duration-200 hover:scale-105'
                                    />
                                    <div className='flex items-center justify-center'>
                                        <button className='w-1/2 px-6 py-3 m-4 duration-100 hover:scale-105'>
                                            Demo
                                        </button>
                                        <button className='w-1/2 px-6 py-3 m-4 duration-100 hover:scale-105'>
                                            Code
                                        </button>

                                    </div>
                                </div>
                        ))}   

                   </div>
        </div>
    </div>
  )
}
export  default Portfolio