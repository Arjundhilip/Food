import React from 'react'

const Feature10 = () => {
    return (
        <div className="relative overflow-hidden bg-white">
      
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  
          <div className="relative mr-400 max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
  
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <h2 className="mt-4 text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Experience the taste of TAMILNADU FEAST.
              </h2>
            </div>
            
  
            <div className="mt-10 mb-5 place-content-center max-w-full" >
              <video muted width="vw" height="vh" controls preload="auto" className='place-content-center justify-end rounded-xl'>
                <source src="/blue1.mp4" type="video/mp4"  />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <h2 className="text-right">
              </h2>
              <h2 className="text-right">
              Our mission is to preserve the culinary traditions that define Tamil Nadu. 
              Through meticulous documentation, we capture the stories behind each dish, 
              the regional variations, and the unique culinary processes that make Tamil Nadu&apos;s 
              cuisine a true treasure trove of flavors.

              </h2>
            </div>
  
          </div>
          
        </div>
  
      </div>
    )
}

export default Feature10
