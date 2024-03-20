'use client'
import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import { first, agri, climate, dist, geo, pop, popular, signature } from '@/constants/districts/chennai'
import Accordion from "../Accordion";
import Button from '../Button'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


const Chennai = () => {
    return (
        <section>
            <div className=" max-container flex w-full flex-col justify-between gap-32 bg-white bg-cover bg-center bg-no-repeat px-6 py-12 text-black sm:flex-row sm:gap-12 sm:py-8 lg:px-20 2xl:rounded-5xl">
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-normal  gap-6">
                    {first.map((person, index) => (
                        <div key={index}>
                            <div className="" >
                                <h2 className="text-base font-semibold leading-7 text-gray-900">{person.tamilheading}</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-[#BE1E2D] sm:text-4xl">{person.topic}</p>
                            </div>

                            <dl className="">
                                <div className=" text-left mx-auto flex max-w-full flex-col gap-y-4">
                                    <dt className="my-2 text-justify text-base leading-7 text-gray-600" >{person.des}
                                    </dt>
                                </div>
                            </dl>
                        </div>
                    ))}

                    <div className='max-container relative flex w-full flex-col justify-between bg-white bg-cover'>
                        <Accordion title="Geographical Features">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                                {geo.map((person, index) => (
                                    <div key={index} className="flex items-top py-4">
                                        <Image
                                            className="h-10 w-10 rounded-full object-cover mr-4"
                                            src={person.imageUrl1}
                                            alt={person.heading}
                                            width={50}
                                            height={50}
                                        />
                                        <div className=''>
                                            <h2 className="text-lg font-semibold text-gray-900">{person.heading}</h2>
                                            <p className="w-96 text-sm text-gray-600">{person.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Accordion>
                        <Accordion title="Climate and Rainfall">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                                {climate.map((person, index) => (
                                    <div key={index} className="flex items-top py-4">
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
                        </Accordion>
                        <Accordion title="Population and Rainfall">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                                {pop.map((person, index) => (
                                    <div key={index} className="flex items-top py-4">
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
                        </Accordion>
                        <Accordion title="Agriculture">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                                {agri.map((person, index) => (
                                    <div key={index} className="flex items-top py-4">
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
                        </Accordion>
                        <Accordion title="Industries">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                                {agri.map((person, index) => (
                                    <div key={index} className="flex items-top py-4">
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
                        </Accordion>
                    </div>

                </div>

                <div className='mb-5 mt-20 aspect-h-9 aspect-w-6 border-2 rounded-lg '>
                    <Image
                        src="/districts/Chennai/Chennai_3.png"
                        alt="phones"
                        style={{
                            width: 'auto',
                            height: 'auto',
                        }}
                        width={600}
                        height={900}
                        className='flex flex-1 rounded-xl' />
                </div>

            </div>

            {/* <div className="mx-auto max-w-full px-4 place-content-center sm:px-6 lg:px-40" >
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
            </div> */}

            {/* <div className='max-container relative flex w-full flex-col justify-between overflow-hidden bg-white bg-cover px-6  lg:px-20'>
                <Accordion title="Geographical Features">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                        {geo.map((person, index) => (
                            <div key={index} className="flex items-top py-4">
                                <Image
                                    className="h-10 w-10 rounded-full object-cover mr-4"
                                    src={person.imageUrl1}
                                    alt={person.heading}
                                    width={50}
                                    height={50}
                                />
                                <div className=''>
                                    <h2 className="text-lg font-semibold text-gray-900">{person.heading}</h2>
                                    <p className="w-96 text-sm text-gray-600">{person.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Accordion>
                <Accordion title="Climate and Rainfall">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                        {climate.map((person, index) => (
                            <div key={index} className="flex items-top py-4">
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
                </Accordion>
                <Accordion title="Population and Rainfall">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                        {pop.map((person, index) => (
                            <div key={index} className="flex items-top py-4">
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
                </Accordion>
                <Accordion title="Agriculture">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                        {agri.map((person, index) => (
                            <div key={index} className="flex items-top py-4">
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
                </Accordion>
            </div> */}


            <div className="max-container flex w-full flex-col justify-between  bg-white bg-cover px-6  lg:px-20">
                <Image
                    src="/districts/infographics/chennai.svg"
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
                    <div className=" max-container relative flex w-full flex-col justify-between overflow-hidden bg-white bg-cover px-6  lg:px-20 " >
                        <p className="mt-2 text-lg font-semibold tracking-tight text-[#BE1E2D] sm:text-2xl">{person.heading}</p>
                    </div>

                    <dl className="max-container relative flex w-full flex-col justify-between overflow-hidden bg-white bg-cover px-6  lg:px-20  sm:mb-5 sm:grid grid-cols-1 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-1">
                        <div className=" text-left mx-auto flex max-w-full flex-col gap-y-4">
                            <dt className="mb-2 text-justify text-base leading-7 text-gray-600" >{person.description}</dt>
                        </div>
                    </dl>
                </div>
            ))}


            <div className="max-container relative w-full flex-col justify-between overflow-hidden bg-white bg-cover  lg:px-20">

                <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 mb-8 lg:max-w-7xl lg:px-8 text-center">
                    <h1 className="mt-4  text-xl font-semibold sm:text-5xl">Culinary Delights</h1>
                </div>
                <h2 className="my-4 text-center text-md tracking-tight sm:text-3xl">Signature Dishes</h2>
                <div className="mb-8 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
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
                <h2 className="my-4 text-center text-md tracking-tight sm:text-3xl">Popular Dishes</h2>
                <div className="mb-8 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
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



            {/* <div className='max-container relative flex w-full flex-col justify-between overflow-hidden bg-white bg-cover'>
                <div className="my-2 max-w-xl px-6 text-black text-justify sm:flex-row lg:px-20">
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

                <div className="my-2 max-w-3xl px-6 text-black text-justify sm:flex-row lg:px-20">
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

                <div className="my-2 max-w-3xl px-6 text-black text-justify sm:flex-row lg:px-20">
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

                <div className="my-2 max-w-3xl px-6 text-black text-justify sm:flex-row lg:px-20">
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

            </div> */}











        </section>
    )
}

export default Chennai
