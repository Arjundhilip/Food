// pages/images.tsx

import Image from 'next/image';
import React from 'react';

const product = {
    images: [
        {
            src: '/districts/sq_districts/ariyalur.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: '/districts/sq_districts/chennai.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: '/districts/sq_districts/coimbatore.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: '/districts/sq_districts/ariyalur.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
        
    ],
};


function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ');
}

const Images: React.FC = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-10 sm:py-6 mb-8">
            
                <div  className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">

                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <Image
                            src={product.images[0].src}
                            alt={product.images[0].alt}
                            className="h-full w-full object-cover object-center" 
                            width={600} 
                            height = {600}
                        />
                    </div>

                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <Image
                                src={product.images[1].src}
                                alt={product.images[1].alt}
                                className="h-full w-full object-cover object-center" width={600} height = {600}
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <Image
                                src={product.images[2].src}
                                alt={product.images[2].alt}
                                className="h-full w-full object-cover object-center" width={600} height = {600}
                            />
                        </div>
                    </div>

                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <Image
                            src={product.images[3].src}
                            alt={product.images[3].alt}
                            className="h-full w-full object-cover object-center" width={600} height = {600}
                        />
                    </div>

                </div>


           
        </div>
    );
};


export default Images;
