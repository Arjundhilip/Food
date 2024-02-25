import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const reviews = { href: '#', average: 5, totalCount: 120 }
const products = [
    {
        id: 1,
        name: 'Halwa',
        href: '#',
        price: '$48',
        imageSrc: '/food1.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Murukku',
        href: '#',
        price: '$35',
        imageSrc: '/food3.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Kadalamittai',
        href: '#',
        price: '$89',
        imageSrc: '/food1.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Chicken',
        href: '/dishes/butterchicken',
        price: '$35',
        imageSrc: '/food3.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]


const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },

    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },

    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },

    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
]


const Butterchicken = () => {
    return (
        <section>
            <div className="mt-10 mb-5 place-content-center max-w-full px-40" >
                <Image
                    src="/food3.png"
                    alt="phones"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={500}
                    height={300}
                    className='flex flex-1 items-center justify-end rounded-xl' />
            </div>

            <div className="mt-10 mb-5 place-content-center max-w-full px-40" >
                <h2 className="text-base font-semibold leading-7 text-indigo-600">TAMILNADU CHICKEN CUT, FAT DISH</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Butter chicken</p>
                <p className="mt-6 text-lg leading-6 text-gray-600">
                </p>
            </div>

            <dl className="px-40 mt-10 mb-5 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                <div className=" text-left mx-auto flex max-w-full flex-col gap-y-4">
                    <dt className="text-justify text-base leading-7 text-gray-600" >Butter Chicken (Murgh Makhani) is one of the most popular curries in the world and yet happens to be one of the easiest! No hunting down hard to find ingredients, this chef recipe that makes the most incredible curry sauce
                        This is a reader-favourite recipe included by popular demand in my debut cookbook “Dinner”!Butter Chicken (Murgh Makhani) is one of the most popular curries in the world and yet happens to be one of the easiest! No hunting down hard to find ingredients, this chef recipe that makes the most incredible curry sauce
                        This is a reader-favourite recipe included by popular demand in my debut cookbook “Dinner”!
                    </dt>
                </div>

                <div className=" mx-auto flex max-w-lg flex-col gap-y-4">
                    <Image
                        src="/districts/Coimbatore.png"
                        alt="phones"
                        width={500}
                        height={300}
                        className='flex flex-1 items-center justify-end rounded-xl' />
                </div>
            </dl>

            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                <dt className="text-justify text-base leading-7 text-gray-600" >Butter Chicken (Murgh Makhani) is one of the most popular curries in the world and yet happens to be one of the easiest! No hunting down hard to find ingredients, this chef recipe that makes the most incredible curry sauce
                    This is a reader-favourite recipe included by popular demand in my debut cookbook “Dinner”!Butter Chicken (Murgh Makhani) is one of the most popular curries in the world and yet happens to be one of the easiest! No hunting down hard to find ingredients, this chef recipe that makes the most incredible curry sauce
                    This is a reader-favourite recipe included by popular demand in my debut cookbook “Dinner”!
                </dt>
            </div>

            <div className="px-40 mt-10 mb-5 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2" >

                <ul role="list" className="divide-y divide-gray-100">
                    {people.map((person) => (
                        <li key={person.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                    {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p> */}
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{person.role}</p>

                                {person.lastSeen ? (
                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                        Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                                    </p>
                                ) : (
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        <p className="text-xs leading-5 text-gray-500">Online</p>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-base font-semibold leading-6 text-gray-900">INTRODUCTION & HISTORY</dt>
                    <dd className="mt-1 text-justify text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        Roti canai, a traditional Malaysian flatbread that can also be found in other Southeast Asian countries,
                        is made with only a few ingredients, namely flour, water, salt, and, traditionally, ghee (clarified butter).
                        However, nowadays, cooking oil is often substituted for ghee, mainly due to price reasons.
                        After combining the ingredients, the dough is kneaded until it becomes smooth and elastic,
                        but the prowess of the cook shows itself in the shaping process. The dough is skillfully spun,
                        tossed, and stretched into a thin, almost translucent layer, which is then folded and shaped into a round
                        or a square, creating multiple flaky layers in the process. Roti canai is typically cooked on a flat griddle
                        until golden brown, revealing its flaky texture and buttery flavor.
                    </dd>
                </div>
            </div>

            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-base font-semibold leading-6 text-gray-900">MAIN INGREDIENTS</dt>
                    
                    <div className="bg-white col-span-2">
                        <div className="grid grid-cols-1  gap-x-8 gap-y-16 lg:grid-cols-4">
                            {products.map((product) => (
                                <a key={product.id} href={product.href} className="group">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-12 xl:aspect-w-10 ">
                                        <Image
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                            width={500}
                                            height={500}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-1 pt-2 font-semibold text-center text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.name}</h3>
                                </a>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                <div className="mb-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-base font-semibold leading-6 text-gray-900">COOKING TIPS</dt>
                    <dd className="mt-1 text-base font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Flour
                    </dd>
                    <dt className="text-base font-semibold leading-6 text-gray-900"></dt>
                    <dd className="text-justify mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        The type of flour best suited for this flatbread is soft flour with low amounts of gluten.
                        In the US, that would be all-purpose flour; in Germany, 405 flour; in Italy, 00 flour.
                        In most Western countries, it is the flour marketed as ideal for making and baking cookies and cakes.
                        In Malaysia, atta flour is typically preferred, atta flour being whole wheat flour that results in a
                        strong dough that can be easily stretched.
                    </dd>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-base font-semibold leading-6 text-gray-900"></dt>
                    <dd className="mt-1 text-base font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Flour
                    </dd>
                    <dt className="text-base font-semibold leading-6 text-gray-900"></dt>
                    <dd className="text-justify mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        The type of flour best suited for this flatbread is soft flour with low amounts of gluten.
                        In the US, that would be all-purpose flour; in Germany, 405 flour; in Italy, 00 flour.
                        In most Western countries, it is the flour marketed as ideal for making and baking cookies and cakes.
                        In Malaysia, atta flour is typically preferred, atta flour being whole wheat flour that results in a
                        strong dough that can be easily stretched.
                    </dd>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-base font-semibold leading-6 text-gray-900"></dt>
                    <dd className="mt-1 text-base font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Flour
                    </dd>
                    <dt className="text-base font-semibold leading-6 text-gray-900"></dt>
                    <dd className="text-justify mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        The type of flour best suited for this flatbread is soft flour with low amounts of gluten.
                        In the US, that would be all-purpose flour; in Germany, 405 flour; in Italy, 00 flour.
                        In most Western countries, it is the flour marketed as ideal for making and baking cookies and cakes.
                        In Malaysia, atta flour is typically preferred, atta flour being whole wheat flour that results in a
                        strong dough that can be easily stretched.
                    </dd>
                </div>
            </div>

            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                <div className="mb-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-base font-semibold leading-6 text-gray-900"></dt>
                    <dd className="mt-1 text-base font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">RATING AND COMMENTS
                    </dd>
                    <dt className="text-base font-semibold leading-6 text-gray-900"></dt>
                    <div>
                        <h3 className="sr-only">Reviews</h3>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                            'h-8 w-8 '
                                        )}
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <p className="sr-only">{reviews.average} out of 5 stars</p>
                            <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                {reviews.totalCount} reviews
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Butterchicken
