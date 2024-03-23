// pages/index.tsx

import React from 'react';
import ImageSlider from '@/components/Imageslider';

const images = [
  '/districts/sq_districts/ariyalur.jpg',
  '/districts/sq_districts/chengalpattu.jpg',
  '/districts/sq_districts/chennai.jpg',
  // Add paths for other districts here
  '/districts/sq_districts/coimbatore.jpg',
  '/districts/sq_districts/cuddalore.jpg',
  '/districts/sq_districts/dharmapuri.jpg',
  '/districts/sq_districts/dindigul.jpg',
  '/districts/sq_districts/erode.jpg',
  '/districts/sq_districts/kallakurichi.jpg',
  '/districts/sq_districts/kancheepuram.jpg',
  '/districts/sq_districts/kanniyakumari.jpg',
  '/districts/sq_districts/karur.jpg',
  '/districts/sq_districts/krishnagiri.jpg',
  '/districts/sq_districts/madurai.jpg',
  '/districts/sq_districts/mayiladuthurai.jpg',
  '/districts/sq_districts/nagapattinam.jpg',
  '/districts/sq_districts/namakkal.jpg',
  '/districts/sq_districts/perambalur.jpg',
  '/districts/sq_districts/pudukkottai.jpg',
  '/districts/sq_districts/ramanathapuram.jpg',
  '/districts/sq_districts/ranipet.jpg',
  '/districts/sq_districts/salem.jpg',
  '/districts/sq_districts/sivagangai.jpg',
  '/districts/sq_districts/tenkasi.jpg',
  '/districts/sq_districts/thanjavur.jpg',
  '/districts/sq_districts/thenilgiris.jpg',
  '/districts/sq_districts/theni.jpg',
  '/districts/sq_districts/thiruvallur.jpg',
  '/districts/sq_districts/thiruvarur.jpg',
  '/districts/sq_districts/thoothukudi.jpg',
  '/districts/sq_districts/trichirappalli.jpg',
  '/districts/sq_districts/thirunelveli.jpg',
  '/districts/sq_districts/tirupathur.jpg',
  '/districts/sq_districts/tiruppur.jpg',
  '/districts/sq_districts/tiruvannamalai.jpg',
  '/districts/sq_districts/viluppuram.jpg',
  '/districts/sq_districts/virudhunagar.jpg',


];

const Calen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="my-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Calendar</h1>
      <div className="flex w-full flex-col px-6 lg:px-20">
        <ImageSlider images={images} />
      </div>
    </div>
  );
};

export default Calen
