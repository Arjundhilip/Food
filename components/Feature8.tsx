import React from 'react'

const Feature7 = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">

          <div className="">
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Experience the taste of TAMILNADU FEAST.
            </h2>
          </div>

          <div className="mt-10 mb-5 place-content-center max-w-full" >
            <video muted width="vw" height="vh" controls preload="auto" className='place-content-center justify-end rounded-xl'>
              <source src="/blue.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
        
      </div>

    </div>

  )
}

export default Feature7
