import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


const products = [
    {
        id: 1,
        name: 'Milk(1.5L)',
        href: '#',
        price: '$48',
        imageSrc: '/Ingredients/milk1.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: '1 Cup Sugar',
        href: '#',
        price: '$35',
        imageSrc: '/Ingredients/sugar1.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 2,
        name: '1 Cup Sugar',
        href: '#',
        price: '$35',
        imageSrc: '/Ingredients/sugar1.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 2,
        name: '1 Cup Sugar',
        href: '#',
        price: '$35',
        imageSrc: '/Ingredients/sugar1.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },

]

const geo = [
    {
        heading: 'Area',
        role: 'Total of 4241.0 Sq.Kms',
        imageUrl1:
            '/person-2.png',
    },
    {
        heading: 'Boundaries',
        role: 'Bounded by Kerala State to the West, Madurai and Sivagangai districts to the North, Ramanathapuram District to the East, and Tirunelveli, Thoothukudi, and Tenkasi Districts to the South.',
        imageUrl1:
            '/person-2.png',
    },
]

const climate = [
    {
        heading: 'Climate',
        role: 'Hot and dry weather prevails for about 9 months.',
        imageUrl1:
            '/person-2.png',
    },
    {
        heading: 'Rainfall',
        role: 'Normally experiences deficit rainfall.',
        imageUrl1:
            '/person-2.png',
    },
    {
        heading: 'Annual rainfall',
        role: '862.4 m.m.',
        imageUrl1:
            '/person-2.png',
    },
]

const pop = [
    {
    heading: 'Total Population',
    role: '19,43,309',        
    imageUrl1:'/person-2.png',
    },
    {
    heading: 'Sex Ratio',
    role: '1007/1000',        
    imageUrl1:'/person-2.png',
    },
    {
    heading: 'Litearcy',
    role: '80.15%',        
    imageUrl1:'/person-2.png',
    },
    ]
    

const Tiruvannamalai = () => {
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

            <div className=" mx-auto place-content-center max-w-full px-4 sm:px-40 sm:mt-10 sm:mb-5 lg:px-40 " >
                <h2 className="text-base font-semibold leading-7 text-indigo-600">விருதுநகர்</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Virudhunagar</p>
            </div>

            <dl className="mx-auto place-content-center max-w-full px-4 sm:px-40  sm:mb-5 sm:grid grid-cols-1 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-1">
                <div className=" text-left mx-auto flex max-w-full flex-col gap-y-4">
                    <dt className="mb-2 text-justify text-base leading-7 text-gray-600" >Srivilliputhur Palkova is a decadent traditional sweet from Srivilliputhur, Tamil Nadu.
                        This luscious milk-based delicacy is known for its rich texture and sweet flavor. Also called Thirattipal, it is a popular dairy product originating from Tamil Nadu,
                        prepared by continuous stirring to concentrate the ingredients and coagulating milk with sour curd.
                    </dt>
                </div>
            </dl>

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


            {/* <div className="mx-auto place-content-center max-w-full px-4 sm:mt-5 sm:mb-5 sm:place-content-center sm:max-w-full sm:px-40">
                <dt className="mt-6 text-justify text-base leading-7 text-gray-600" >Butter Chicken (Murgh Makhani) is one of the most popular curries in the world and yet happens to be one of the easiest! No hunting down hard to find ingredients, this chef recipe that makes the most incredible curry sauce
                    This is a reader-favourite recipe included by popular demand in my debut cookbook “Dinner”!Butter Chicken (Murgh Makhani) is one of the most popular curries in the world and yet happens to be one of the easiest! No hunting down hard to find ingredients, this chef recipe that makes the most incredible curry sauce
                    This is a reader-favourite recipe included by popular demand in my debut cookbook “Dinner”!
                </dt>
            </div> */}
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

            </div>

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
                    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 mb-8 lg:max-w-7xl lg:px-8">
                        <h1 className="my-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Culinary Delights</h1>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                            {products.map((product) => (
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

export default Tiruvannamalai
