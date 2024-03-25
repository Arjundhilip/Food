// pages/index.tsx

import React from 'react';
import ImageSlider from '@/components/Imageslider';

const images = [
  '/districts/ls_districts/ariyalur.jpg',
  '/districts/ls_districts/chengalpattu.jpg',
  '/districts/ls_districts/chennai.jpg',
  // Add paths for other districts here
  '/districts/ls_districts/coimbatore.jpg',
  '/districts/ls_districts/cuddalore.jpg',
  '/districts/ls_districts/dharmapuri.jpg',
  '/districts/ls_districts/dindigul.jpg',
  '/districts/ls_districts/erode.jpg',
  '/districts/ls_districts/kallakurichi.jpg',
  '/districts/ls_districts/kancheepuram.jpg',
  '/districts/ls_districts/kanniyakumari.jpg',
  '/districts/ls_districts/karur.jpg',
  '/districts/ls_districts/krishnagiri.jpg',
  '/districts/ls_districts/madurai.jpg',
  '/districts/ls_districts/mayiladuthurai.jpg',
  '/districts/ls_districts/nagapattinam.jpg',
  '/districts/ls_districts/namakkal.jpg',
  '/districts/ls_districts/perambalur.jpg',
  '/districts/ls_districts/ramanathapuram.jpg',
  '/districts/ls_districts/ranipet.jpg',
  '/districts/ls_districts/salem.jpg',
  '/districts/ls_districts/sivagangai.jpg',
  '/districts/ls_districts/tenkasi.jpg',
  '/districts/ls_districts/thanjavur.jpg',
  '/districts/ls_districts/thenilgiris.jpg',
  '/districts/ls_districts/theni.jpg',
  '/districts/ls_districts/thiruvallur.jpg',
  '/districts/ls_districts/thiruvarur.jpg',
  '/districts/ls_districts/thoothukudi.jpg',
  '/districts/ls_districts/trichirappalli.jpg',
  '/districts/ls_districts/thirunelveli.jpg',
  '/districts/ls_districts/tirupathur.jpg',
  '/districts/ls_districts/tiruppur.jpg',
  '/districts/ls_districts/tiruvannamalai.jpg',
  '/districts/ls_districts/viluppuram.jpg',
  '/districts/ls_districts/virudhunagar.jpg',
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
