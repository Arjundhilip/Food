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

]


const people = [
    {
        name: 'Type of Dish:',
        email: 'leslie.alexander@example.com',
        role: 'Dessert',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },

    {
        name: 'Illustrations:',
        email: 'dries.vincent@example.com',
        role: 'Not provided',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },

    {
        name: 'Decade:',
        email: 'dries.vincent@example.com',
        role: '9th century',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },

    {
        name: 'City:',
        email: 'leslie.alexander@example.com',
        role: 'Srivilliputhur',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },

    {
        name: 'State:',
        email: 'leslie.alexander@example.com',
        role: 'Tamil Nadu',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },

    {
        name: 'Country:',
        email: 'leslie.alexander@example.com',
        role: 'India',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },

    {
        name: 'Language:',
        email: 'leslie.alexander@example.com',
        role: 'Tamil, English',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
]


const Srivilliputhur_Palkova = () => {
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
                <p className="mt-6 text-lg leading-6 text-gray-600">
                </p>
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

            {/* <div className="mx-auto place-content-center max-w-full px-4 sm:mt-5 sm:mb-5 sm:place-content-center sm:max-w-full sm:px-40">
                <dt className="mt-6 text-justify text-base leading-7 text-gray-600" >Butter Chicken (Murgh Makhani) is one of the most popular curries in the world and yet happens to be one of the easiest! No hunting down hard to find ingredients, this chef recipe that makes the most incredible curry sauce
                    This is a reader-favourite recipe included by popular demand in my debut cookbook “Dinner”!Butter Chicken (Murgh Makhani) is one of the most popular curries in the world and yet happens to be one of the easiest! No hunting down hard to find ingredients, this chef recipe that makes the most incredible curry sauce
                    This is a reader-favourite recipe included by popular demand in my debut cookbook “Dinner”!
                </dt>
            </div> */}

            <div className="mx-auto place-content-center max-w-full px-4 sm:px-40 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2" >

                <ul role="list" className="divide-y divide-gray-100">
                    {people.map((person) => (
                        <li key={person.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                {/* <img className="hidden shrink-0 sm:flex sm:flex-col sm:items-end h-6 w-6 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                </div>
                            </div>
                            <div className="sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                <div className="mt-5 mb-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-base font-semibold leading-6 text-gray-900">ANTROPOLOGY</dt>
                    <dd className="mt-1 text-justify text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        Srivilliputhur Palkova has an interesting origin story. Vishnu Sithar found a baby in the garden,
                        adopted her as his daughter, and named her Kodhai. She grew up devoted to Lord Vishnu, later known as Andal.
                        The act of wearing garlands meant for the lord led to a divine connection. The tradition of offering Thirattipaal
                        in weddings originates from Andal&apos;s marriage, and it is still followed today.
                    </dd>
                </div>

                <div className="mt-5 mb-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-base font-semibold leading-6 text-gray-900">SIGNIFICANT FEATURES</dt>
                    <dd className="mt-1 text-justify text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        The art of preparing Srivilliputhur Palkova is passed down through generations. 
                        The slow-cooking technique involves simmering fresh cow&apos;s milk to gradually reduce and thicken, 
                        resulting in a creamy, caramelized dessert.
                    </dd>
                </div>

                <div className="mt-5 mb-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-base font-semibold leading-6 text-gray-900">FESTIVALS AND CELEBRATIONS</dt>
                    <dd className="mt-1 text-justify text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        Srivilliputhur Palkova holds a central place in the town&apos;s festival calendar, particularly 
                        during Andal Thirukalyanam, Krishna Jayanthi, and Navaratri. The temple premises come alive 
                        with the aroma of Palkova, and devotees eagerly partake in its distribution as prasadam.
                    </dd>
                </div>

                <div className="mt-5 mb-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-base font-semibold leading-6 text-gray-900">SPECIALTY</dt>
                    <dd className="mt-1 text-justify text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        Beyond its culinary appeal, Srivilliputhur Palkova carries profound symbolism. The milk used
                        symbolizes purity and divine mother&apos;s love. Offering and consuming Palkova are believed to bring blessings,
                        joy, and spiritual fulfillment, aligning with the temple&apos;s philosophy of connecting with the divine through food.
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
                    <dt className="text-base font-semibold leading-6 text-gray-900">COOKING INSTRUCTIONS</dt>
                    <dd className="mt-1 text-base leading-6 text-gray-900 sm:col-span-2 sm:mt-0">
                        <ul className="list-disc list-inside">
                            <li>Heat milk on medium flame in a heavy-bottomed pan.</li>
                            <li>Once boiled, lower the flame to low and stir continuously.</li>
                            <li>Slowly thicken the milk, scraping the cream from the sides.</li>
                            <li>Include the cream into the pan, mixing well on low flame.</li>
                            <li>Once the milk thickens, add sugar and dissolve well.</li>
                            <li>When the mixture thickens, remove from the pan and serve hot or cut into desired shapes.</li>
                            <li>Optionally garnish with nuts and kesar strands.</li>
                        </ul>
                    </dd>
                    <dt className="text-base font-semibold leading-6 text-gray-900"></dt>
                    <dd className="text-justify mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    </dd>
                </div>
                {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                </div> */}
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

export default Srivilliputhur_Palkova