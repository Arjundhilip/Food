// pages/index.tsx

import React from 'react';
import ImageSlider from '@/components/Imageslider';

const images = [
  '/Calendar/1.jpg',
  '/Calendar/2.jpg',
  '/Calendar/3.jpg',
];

const Calen: React.FC = () => {
  return (

    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

      <div className="relative mr-400 max-w-7xl px-4 sm:static sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-x-8 gap-y-16">
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Calendar
          </h2>
        </div>

        <div className="mt-10 mb-5 place-content-center max-w-full" >
          <ImageSlider images={images} />
        </div>

      </div>

    </div>

  );
};

export default Calen
