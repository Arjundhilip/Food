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

const people = [
    {
        name: 'Area',
        email: 'leslie.alexander@example.com',
        role: 'Total of 4241.0 Sq.Kms',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Area',
        email: 'leslie.alexander@example.com',
        role: 'Total of 4241.0 Sq.Kms',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Area',
        email: 'leslie.alexander@example.com',
        role: 'Total of 4241.0 Sq.Kms',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Area',
        email: 'leslie.alexander@example.com',
        role: 'Total of 4241.0 Sq.Kms',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Area',
        email: 'leslie.alexander@example.com',
        role: 'Total of 4241.0 Sq.Kms',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Area',
        email: 'leslie.alexander@example.com',
        role: 'Total of 4241.0 Sq.Kms',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },

]

const Viruthunagar = () => {
    return (
        <section>
            <div className="mx-auto max-w-full px-4 place-content-center sm:px-6 lg:px-40" >
                <Image
                    src="/Ingredients/Palkova.jpg"
                    alt="phones"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={500}
                    height={300}
                    className='flex flex-1 items-center justify-end rounded-xl' />
            </div>

            <div className=" mx-auto place-content-center max-w-full px-4 sm:px-40 sm:mt-10 sm:mb-5 lg:px-40 " >
                <h2 className="text-base font-semibold leading-7 text-indigo-600">ஸ்ரீவில்லிபுதூர் பால்கோவா</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Srivilliputhur Palkova</p>

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
                    src="/districts/Virudhunagar.jpg"
                    alt="phones"
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

            <div className="my-2 max-w-4xl px-4 place-items-start sm:px-6 lg:px-40">
                <ul className="divide-y divide-gray-200">
                    {people.map((person, index) => (
                        <li key={index} className="flex items-center justify-between py-4">
                            <div className="flex items-center">
                                <Image
                                    className="h-10 w-10 rounded-full object-cover mr-4"
                                    src={person.imageUrl}
                                    alt={person.name}
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">{person.name}</h2>

                                </div>
                            </div>
                            <p className="text-sm text-gray-600">{person.role}</p>
                        </li>
                    ))}
                </ul>
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
                        src="/districts/Virudhunagar.jpg"
                        alt="phones"
                        width={500}
                        height={300}
                        className='flex flex-1 items-center justify-end' />
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

export default Viruthunagar
