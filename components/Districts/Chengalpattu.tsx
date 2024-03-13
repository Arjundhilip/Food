import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import { first, agri, climate, dist, geo, pop, popular, signature } from '@/constants/districts/chengalpattu'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}





const Chengalpattu = () => {
    return (
        <section>
            <div className="mx-auto max-w-full px-4 place-content-center sm:px-6 lg:px-40" >
                <Image
                    src="/districts/Collage/virudhunagar.png"
                    alt="Collage of Dist"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={500}
                    height={300}
                    className='flex flex-1 items-center justify-end rounded-xl' />
            </div>
            {first.map((person, index) => (
                <div key={index}>
                    <div className=" mx-auto place-content-center max-w-full px-4 sm:px-40 sm:mt-10 sm:mb-5 lg:px-40 " >
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">{person.tamilheading}</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{person.topic}</p>
                    </div>

                    <dl className="mx-auto place-content-center max-w-full px-4 sm:px-40  sm:mb-5 sm:grid grid-cols-1 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-1">
                        <div className=" text-left mx-auto flex max-w-full flex-col gap-y-4">
                            <dt className="mb-2 text-justify text-base leading-7 text-gray-600" >{person.des}
                            </dt>
                        </div>
                    </dl>
                </div>
            ))}

            <div className="mx-auto max-w-full px-4 place-content-center sm:px-6 lg:px-40" >
                <Image
                    src="/districts/ls_districts/virudhunagar.jpg"
                    alt="Map of virudhunagar"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={500}
                    height={300}
                    className='flex flex-1 items-center justify-end rounded-xl' />
            </div>

            <div>

                <div className="my-2 max-w-4xl px-4 sm:px-6 lg:px-40">
                    <h2 className="text-2xl font-bold mt-4">Geographical Features</h2>

                    <div className="mt-4">
                        {geo.map((person, index) => (
                            <div key={index} className="flex items-center py-4">
                                <Image
                                    className="h-10 w-10 rounded-full object-cover mr-4"
                                    src={person.imageUrl1}
                                    alt={person.heading}
                                    width={50}
                                    height={50}
                                />
                                <div className=''>
                                    <h2 className="text-lg font-semibold text-gray-900">{person.heading}</h2>
                                    <p className="text-sm text-gray-600">{person.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-2 max-w-4xl px-4 sm:px-6 lg:px-40">
                    <h2 className="text-2xl font-bold mt-4">Climate and Rainfall</h2>

                    <div className="mt-4">
                        {climate.map((person, index) => (
                            <div key={index} className="flex items-center py-4">
                                <Image
                                    className="h-10 w-10 rounded-full object-cover mr-4"
                                    src={person.imageUrl1}
                                    alt={person.heading}
                                    width={50}
                                    height={50}
                                />
                                <div className=''>
                                    <h2 className="text-lg font-semibold text-gray-900">{person.heading}</h2>
                                    <p className="text-sm text-gray-600">{person.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-2 max-w-4xl px-4 sm:px-6 lg:px-40">
                    <h2 className="text-2xl font-bold mt-4">Population and Rainfall</h2>

                    <div className="mt-4">
                        {pop.map((person, index) => (
                            <div key={index} className="flex items-center py-4">
                                <Image
                                    className="h-10 w-10 rounded-full object-cover mr-4"
                                    src={person.imageUrl1}
                                    alt={person.heading}
                                    width={50}
                                    height={50}
                                />
                                <div className=''>
                                    <h2 className="text-lg font-semibold text-gray-900">{person.heading}</h2>
                                    <p className="text-sm text-gray-600">{person.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-2 max-w-4xl px-4 sm:px-6 lg:px-40">
                    <h2 className="text-2xl font-bold mt-4">Agriculture</h2>

                    <div className="mt-4">
                        {agri.map((person, index) => (
                            <div key={index} className="flex items-center py-4">
                                <Image
                                    className="h-10 w-10 rounded-full object-cover mr-4"
                                    src={person.imageUrl1}
                                    alt={person.heading}
                                    width={50}
                                    height={50}
                                />
                                <div className=''>
                                    <h2 className="text-lg font-semibold text-gray-900">{person.heading}</h2>
                                    <p className="text-sm text-gray-600">{person.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>



            <div className="mx-auto max-w-full px-4 place-content-center sm:px-6 lg:px-40" >
                <Image
                    src="/districts/multimedia/virudhunagar.png"
                    alt="Map of virudhunagar"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={500}
                    height={300}
                    className='flex flex-1 items-center justify-end rounded-xl' />
            </div>

            {dist.map((person, index) => (
                <div key={index}>

                    <div className=" mx-auto place-content-center max-w-full px-4 sm:px-40 sm:mt-10 sm:mb-5 lg:px-40 " >
                        <p className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{person.heading}</p>
                    </div>

                    <dl className="mx-auto place-content-center max-w-full px-4 sm:px-40  sm:mb-5 sm:grid grid-cols-1 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-1">
                        <div className=" text-left mx-auto flex max-w-full flex-col gap-y-4">
                            <dt className="mb-2 text-justify text-base leading-7 text-gray-600" >{person.description}
                            </dt>
                        </div>
                    </dl>


                </div>
            ))}

            <dl className="mx-auto place-content-center max-w-full px-4 sm:px-40 sm:mt-10 sm:mb-5 sm:grid grid-cols-1 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-2">
                <div className=" text-left mx-auto flex max-w-full flex-col gap-y-4">
                    <dt className="mb-6 text-justify text-base leading-7 text-gray-600" >Srivilliputhur Palkova is a decadent traditional sweet from Srivilliputhur, Tamil Nadu.
                        This luscious milk-based delicacy is known for its rich texture and sweet flavor. Also called Thirattipal, it is a popular dairy product originating from Tamil Nadu,
                        prepared by continuous stirring to concentrate the ingredients and coagulating milk with sour curd.
                    </dt>
                </div>

                <div className="mx-auto flex max-w-lg flex-col gap-y-4 ">
                    <Image
                        src="/districts/multimedia/virudhunagar.png"
                        alt="Multimedia"
                        width={500}
                        height={300}
                        className='flex flex-1 items-center justify-end rounded-md' />
                </div>
            </dl>

            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 mb-8 lg:max-w-7xl lg:px-8">
                        <h1 className="my-8 text-center text-xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Culinary Delights</h1>
                    </div>
                </div>
            </div>

            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                <div className="bg-white">
                    <div className=" max-w-2xl px-4  sm:px-6  mb-8 lg:max-w-7xl lg:px-8">
                        <h1 className="my-4 text-center text-md font-semibold tracking-tight text-gray-900 sm:text-3xl">Signature Dishes</h1>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                            {signature.map((product) => (
                                <a key={product.id} href={product.href} className="group">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                        <Image
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            width={400}
                                            height={400}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="bold-20 lg:bold-20 mt-4 text-center text-sm text-gray-700">{product.name}</h3>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                <div className="bg-white">
                    <div className=" max-w-2xl px-4  sm:px-6  mb-8 lg:max-w-7xl lg:px-8">
                        <h1 className="my-4 text-center text-md font-semibold tracking-tight text-gray-900 sm:text-3xl">Popular Dishes</h1>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                            {popular.map((product) => (
                                <a key={product.id} href={product.href} className="group">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                        <Image
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            width={400}
                                            height={400}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="bold-20 lg:bold-20 mt-4 text-center text-sm text-gray-700">{product.name}</h3>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Chengalpattu
