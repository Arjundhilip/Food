"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import PrintButton from '../PrintButton'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const reviews = { href: '#', average: 5, totalCount: 120 }
const intro = [
    {
        tamilheading: 'சென்னை',
        topic: 'Vada Curry',
        des: 'Vada Curry, also known as Vadacurry, is a cherished culinary gem from the bustling streets of Chennai, Tamil Nadu. This delectable dish serves as a versatile accompaniment to a variety of South Indian breakfast and dinner staples, including idiyappam, idli, dosa, parotta, puris, and rotis. Whether served with soft idlis, crispy dosas, or fluffy puris, Vada Curry is sure to transport your taste buds to the heart of Chennai’s vibrant food culture.',
        imageSrc: '/Ingredients/milk1.jpg',
        
    },
    

]

const ingredient_pic = [
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



const info = [
    {
        name: 'ANTHROPOLOGY',
        imageSrc: '/Ingredients/Palkova.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        name: 'SIGNIFICANT FEATURES',
        imageSrc: '/Ingredients/Palkova.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        name: 'FESTIVALS AND CELEBRATIONS',
        imageSrc: '/Ingredients/Palkova.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        name: 'SPECIALTY',
        imageSrc: '/Ingredients/Palkova.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },

]

const list = [
    {
        name: 'Type of Dish:',
        role: 'Dessert',
        imageUrl:
            '/icons/climate.png',
    },

    {
        name: 'Illustrations:',
        role: 'Not provided',
        imageUrl:
            '/person-2.png',
    },

    {
        name: 'Decade:',
        role: '9th century',
        imageUrl:
            '/person-2.png',
    },

    {
        name: 'City:',
        role: 'Srivilliputhur',
        imageUrl:
            '/person-2.png',
    },

    {
        name: 'State:',
        role: 'Tamil Nadu',
        imageUrl:
            '/person-2.png',
    },

    {
        name: 'Country:',
        role: 'India',
        imageUrl:
            '/person-2.png',
    },

    {
        name: 'Language:',
        role: 'Tamil, English',
        imageUrl:
            '/person-2.png',
    },
]

interface Ingredient {
    name: string;
    quantity: number;
    unit: string;
}


const Vada_curry = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const [numServings, setNumServings] = useState(1); // Default servings

    const ingredients: Ingredient[] = [
        { name: 'puttu flour', quantity: 0.5, unit: 'cup' },
        { name: 'water or add as required', quantity: 0.17, unit: 'cup' },
        { name: 'water or add as required', quantity: 0.17, unit: 'cup' },
        { name: 'water or add as required', quantity: 0.17, unit: 'cup' },
        { name: 'water or add as required', quantity: 0.17, unit: 'cup' },
        { name: 'water or add as required', quantity: 0.17, unit: 'cup' },
        { name: 'water or add as required', quantity: 0.17, unit: 'cup' },

        // Add more ingredients as needed
    ];

    const handleServingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newServings = parseInt(e.target.value);
        setNumServings(newServings);
    };


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
            {intro.map((person, index) => (
            <div key={index}>
                <div className=" mx-auto place-content-center max-w-full px-4 sm:px-40 sm:mt-10 sm:mb-5 lg:px-40 " >
                    <h2 className="text-base font-semibold leading-7 text-[#BE1E2D]">{person.tamilheading}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{person.topic}</p>
                    <p className="mt-6 text-lg leading-6 text-gray-600">
                    </p>
                </div>

                <div className="mx-auto place-content-center max-w-full px-4 sm:px-40 sm:mt-10 sm:mb-5 sm:grid grid-cols-1 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-2">
                    <div className="text-left mx-auto flex max-w-full flex-col gap-y-4">
                        <dt className="mb-6 text-justify text-base leading-7 text-gray-600">
                            {person.des}
                        </dt>
                    </div>

                    <div className=" justify-self-end relative w-[150px]">
                        <Image
                            src={person.imageSrc}
                            alt={person.topic}
                            width={500}
                            height={300}
                            className="object-cover absolute right-0 border-2 rounded-xl"
                        />
                    </div>
                </div>
            </div>
            ))}





            <div className="mx-auto place-content-center max-w-full px-4 sm:px-40 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2" >

                <ul role="list" className="divide-y divide-gray-100">
                    {list.map((person) => (
                        <li key={person.name} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">


                                <Image
                                    src={person.imageUrl}
                                    alt={person.name}
                                    width={50} //Set width of the image
                                    height={50} // Set height of the image
                                    className="h-10 w-10 rounded-full object-cover" // Apply any additional styling to the image
                                />

                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900 pt-2">{person.name}</p>
                                </div>
                            </div>
                            <div className="sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900 pt-2">{person.role}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>




            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                {info.map((person) => (
                    <div key={person.name} className='max-container relative flex w-full flex-col justify-between bg-white bg-cover'>
                        <h2 className="text-xl font-bold mb-5 mt-5 ">{person.name}</h2>
                        <Image
                            src={person.imageSrc}
                            alt={person.imageAlt}
                            style={{
                                width: 'auto',
                                height: 'auto',
                            }}
                            width={600}
                            height={900}
                            className='flex flex-1 rounded-xl mb-5' />
                    </div>
                ))}
            </div>


            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-base font-semibold leading-6 text-gray-900">MAIN INGREDIENTS</dt>

                    <div className="bg-white col-span-2">
                        <div className="grid grid-cols-1  gap-x-8 gap-y-16 lg:grid-cols-4">
                            {ingredient_pic.map((product) => (
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

            </div>

            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                <div className="mb-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className=" text-base font-semibold leading-6 text-gray-900">RECIPE CARD</dt>
                    <dd className="recipe-card p-4 border-2 border-gray-900 shadow-lg rounded-lg overflow-hidden mt-1 text-base leading-6 text-gray-900 sm:col-span-2 sm:mt-0">

                        <h2 className="text-3xl font-semibold mb-4">Srivilliputhur Palkova</h2>
                        <dl className="mb-4 mx-auto place-content-center max-w-full sm:grid grid-cols-1 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-2 col-span-2">
                            <div className=" text-left flex max-w-full flex-col gap-y-4">
                                <dt className="mb-6 text-justify text-base leading-7 text-gray-600" >Srivilliputhur Palkova is a decadent traditional sweet from Srivilliputhur, Tamil Nadu.
                                    This luscious milk-based delicacy is known for its rich texture and sweet flavor. Also called Thirattipal, it is a popular dairy product originating from Tamil Nadu,
                                    prepared by continuous stirring to concentrate the ingredients and coagulating milk with sour curd.
                                </dt>
                            </div>

                            <div className="flex max-w-lg flex-col">
                                <Image
                                    src="/Ingredients/Palkova.jpg"
                                    alt="phones"
                                    style={{
                                        width: 'auto%',
                                        height: 'auto%',
                                    }}
                                    width={500}
                                    height={500}
                                    className='flex flex-1 rounded-md items-center justify-end' />
                            </div>
                        </dl>

                        <div className="bg-white col-span-2 mb-2 border-y border-gray-200 py-4 ">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">

                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden xl:aspect-h-10 xl:aspect-w-10 ">
                                    <PrintButton
                                        type="button"
                                        title="PRINT"
                                        icon="/Icons/print.png"
                                        variant="btn_dark_green_outline"
                                        full
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="grid grid-flow-row-dense grid-cols-10 mb-2">
                            <div className="my-2 border-r-2 border-gray-200">
                                <Image
                                    src="/Icons/time.png"
                                    alt="phones"
                                    style={{
                                        width: 'auto',
                                        height: 'auto',
                                    }}
                                    width={40}
                                    height={40}
                                    className='rounded-md items-center justify-end'
                                />
                            </div>
                            <div className="col-span-3 my-2 pl-4 border-r-2 border-gray-200">
                                {/* Display "Prep Time" with its value */}
                                <strong>Prep Time:</strong><br /> 4 mins
                            </div>
                            <div className="col-span-3 my-2 pl-4 border-r-2 border-gray-200">
                                {/* Display "Prep Time" with its value */}
                                <strong>Cook Time:</strong><br /> 14 mins
                            </div>
                            <div className="col-span-3 my-2 pl-4">
                                {/* Display "Prep Time" with its value */}
                                <strong>Total Time:</strong><br /> 24 mins
                            </div>

                        </div>

                        <div className="grid grid-flow-row-dense grid-cols-10 mb-2">
                            <div className="my-2 border-r-2 border-gray-200">
                                <Image
                                    src="/Icons/cooking.png"
                                    alt="phones"
                                    style={{
                                        width: 'auto',
                                        height: 'auto',
                                    }}
                                    width={40}
                                    height={40}
                                    className='rounded-md items-center justify-end'
                                />
                            </div>
                            <div className="col-span-3 my-2 pl-4 border-r-2 border-gray-200">
                                {/* Display "Prep Time" with its value */}
                                <strong>Cuisine</strong><br />Kerala, South Indian
                            </div>
                            <div className="col-span-3 my-2 pl-4 border-r-2 border-gray-200">
                                {/* Display "Prep Time" with its value */}
                                <strong>Course</strong><br />Breakfast
                            </div>
                            <div className="col-span-2 my-2 pl-4 ">
                                {/* Display "Prep Time" with its value */}
                                <strong>Diet</strong><br />Vegan
                            </div>



                        </div>

                        <div className="">

                            <div className="flex mt-2 mb-2 border-t border-gray-200 pt-4 ">
                                <label htmlFor="servings" className="mr-5 "><strong>Servings</strong></label>
                                <input
                                    type="number"
                                    id="servings"
                                    name="servings"
                                    value={numServings}
                                    onChange={handleServingsChange}
                                    className="w-12  border border-gray-40 pl-1.5 font-semibold rounded-sm focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 border-t border-gray-200 pt-4">Ingredients</h2>
                            {ingredients.map((ingredient, index: number) => (
                                <div key={index} className="my-2 space-y-6">
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="comments"
                                                name="comments"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>

                                        <div className="text-sm leading-6">
                                            <a className="text-gray-700">
                                                {`${(ingredient.quantity) * numServings} ${ingredient.unit} ${ingredient.name}`}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <h3 className="text-xl font-bold text-gray-800 border-t border-gray-200 pt-4">Instructions</h3>
                        <ol className="list-decimal font-semibold list-inside mb-2">
                            <li>
                                <span className="font-normal text-gray-900 dark:text-black">Take 1 cup puttu flour in a mixing bowl or a pan.</span>
                            </li>
                            <li>
                                <span className="font-normal text-gray-900 dark:text-black">Add salt to taste.</span>
                            </li>
                            <li>
                                <span className="font-normal text-gray-900 dark:text-black">Sprinkle water gradually while mixing until the mixture resembles coarse crumbs. The mixture should hold shape when pressed together but crumble easily.</span>
                            </li>
                        </ol>

                        <h3 className="text-xl font-bold text-gray-800 border-t border-gray-200 pt-4">Assembly</h3>
                        <ol className="list-decimal font-semibold list-inside mb-2">
                            <li>
                                <span className="font-normal text-gray-900 dark:text-black">Take 1 cup puttu flour in a mixing bowl or a pan.</span>
                            </li>
                            <li>
                                <span className="font-normal text-gray-900 dark:text-black">Add salt to taste.</span>
                            </li>
                            <li>
                                <span className="font-normal text-gray-900 dark:text-black">Sprinkle water gradually while mixing until the mixture resembles coarse crumbs. The mixture should hold shape when pressed together but crumble easily.</span>
                            </li>
                        </ol>

                        <h3 className="text-xl font-bold text-gray-800 border-t border-gray-200 pt-4">Notes</h3>
                        <ol className="mb-2 list-disc  list-inside">
                            <li>
                                <span className="italic text-gray-900 dark:text-black">Take 1 cup puttu flour in a mixing bowl or a pan.</span>
                            </li>
                            <li>
                                <span className="italic text-gray-900 dark:text-black">Take 1 cup puttu flour in a mixing bowl or a pan.</span>
                            </li>
                            <li>
                                <span className="italic text-gray-900 dark:text-black">Take 1 cup puttu flour in a mixing bowl or a pan.</span>
                            </li>
                            <li>
                                <span className="italic text-gray-900 dark:text-black">Take 1 cup puttu flour in a mixing bowl or a pan.</span>
                            </li>
                        </ol>

                        <h3 className="text-xl font-bold text-gray-800 border-t border-gray-200 pt-4">Nutrition Info (Approximate Values)</h3>
                        <dl className="pt-4 mb-4 mx-auto place-content-center max-w-full sm:grid grid-cols-1 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-2 col-span-2">
                            <div className="flex max-w-lg flex-col">
                                <Image
                                    src="/NutritionLabel.png"
                                    alt="phones"
                                    style={{
                                        width: 'auto',
                                        height: 'auto%',
                                    }}
                                    width={500}
                                    height={500}
                                    className='flex flex-1 rounded-md items-center justify-end' />
                            </div>
                        </dl>

                    </dd>



                </div>
            </div >

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


        </section >
    )
}

export default Vada_curry
