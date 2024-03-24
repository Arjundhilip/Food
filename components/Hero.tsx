import React from 'react'
import Button from './Button'
import Image from 'next/image'




const Hero = () => {
  return (

    <section className="flexCenter w-full flex-col">
      <div className="get-app">
        
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 text-center lg:text-left animate-slide-left">Showcasing the Culinary Heritage of Tamil Nadu </h2>
          {/* <p className="regular-16 text-green-70">Available on iOS and Android</p> */}
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row animate-slide-left">

            {/* <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_dark_green_outline"
              full
            /> */}

            <Button
              type="button"
              title="Read more"
              // icon="/android.svg"
              variant="btn_red"

            />
            
          </div>
        </div>
        <div className="transform hover:scale-110 transition-transform duration-300 ease-in-out">
        <Image
          src='/herofood.jpeg'
          alt='Food'
          width={550}
          height={870}
          className='flex flex-1 items-center justify-end rounded-xl animate-slide-right ' />
        </div>


      </div>
    </section>

  )
}

export default Hero