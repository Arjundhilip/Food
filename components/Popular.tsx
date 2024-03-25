import React from 'react'
import Image from 'next/image'
import {  popular } from '@/constants/populardishes'




const Popular = () => {
    return (
        <section>
            <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Popular Dishes</p>
                <h2 className="mt-2 text-base font-semibold leading-7 text-gray-600 lg:w-2/3">
                    Tamil Nadu, a state in southern India, boasts a rich culinary tradition with a wide array of delicious dishes. Here are some signature dishes from Tamil Nadu.</h2>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {popular.map((product, index) => (
                            <a key={product.name} href={product.href} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <Image
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        width = {100}
                                        height = {100}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="text-center mt-4 text-lg font-bold text-gray-900">{product.name}</h3>
                                
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popular
