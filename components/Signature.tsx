'use client'
import React from 'react';
import Accordion from "../components/Accordion";
import Image from 'next/image';

const ariyalur = [
  {
    id: 1,
    name: 'Srivilliputhur Palkova',
    href: '/dishes/signature/srivilliputhurpalkova',
    imageSrc: '/Ingredients/Palkova.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 1,
    name: 'Srivilliputhur Palkova',
    href: '/dishes/signature/srivilliputhurpalkova',
    imageSrc: '/Ingredients/Palkova.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 1,
    name: 'Srivilliputhur Palkova',
    href: '/dishes/signature/srivilliputhurpalkova',
    imageSrc: '/Ingredients/Palkova.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  
]

const srivilliputhur = [
  {
    id: 1,
    name: 'Srivilliputhur Palkova',
    href: '/dishes/signature/srivilliputhurpalkova',
    imageSrc: '/Ingredients/Palkova.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
]


const Signature = () => {
  return (
    <section>

      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Signature Dishes</p>
        <h2 className="mt-2 text-base font-semibold leading-7 text-gray-600 lg:w-2/3">
          Tamil Nadu, a state in southern India, boasts a rich culinary tradition with a wide array of delicious dishes. Here are some signature dishes from Tamil Nadu.</h2>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 mb-8 lg:max-w-7xl lg:px-8">

        <Accordion title="Ariyalur">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
            {ariyalur.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={1200}
                    height={1200}
                    className="w-full h-auto object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="bold-20 lg:bold-20 mt-4 text-center text-sm text-gray-700">{product.name}</h3>
              </a>
            ))}
          </div>
        </Accordion>

        <Accordion title="Srivilliputhur">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
            {srivilliputhur.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="bold-20 lg:bold-20 mt-4 text-center text-sm text-gray-700">{product.name}</h3>
              </a>
            ))}
          </div>
        </Accordion>

      </div>
    </section>
  );
};


export default Signature
