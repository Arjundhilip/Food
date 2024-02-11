import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flexCenter w-full flex-col">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[620px]">Showcasing the Culinary Heritage of Tamil Nadu's </h2>
          {/* <p className="regular-16 text-green-70">Available on iOS and Android</p> */}
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">

            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_dark_green_outline"
              full
            />

            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_green"
              full
            />
          </div>
        </div>

        <img 
        src="/herofood.jpeg" 
        alt="phones" 
        width={550} 
        height={870} 
        className='flex flex-1 items-center justify-end rounded-xl' />
      </div>
    </section>
  )
}

export default Hero