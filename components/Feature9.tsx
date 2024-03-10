import React from 'react'
import Image from 'next/image'

const Feature9 = () => {
    return (
        <div className="bg-white py-24 sm:py-16 px-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">

                    <div className="text-left mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-justify text-gray-600 pb-4">
                            Our digital archive is designed to be a valuable resource for researchers, 
                            food enthusiasts, and anyone curious about the culinary tapestry of Tamil Nadu. 
                        </dt>
                        <dt className="align-bottom text-justify text-base leading-7 text-gray-600">
                            By documenting and archiving these signature dishes, we contribute to 
                            the preservation of Tamil Nadu&apos;s cultural heritage. The kitchen is a living museum, 
                            and each recipe is a piece of history that deserves to be celebrated, shared, 
                            and passed onto future generations.

                        </dt>
                    </div>

                    <div className="col-span-2 mx-auto flex max-w-lg flex-col gap-y-4">
                        <Image
                            src="/food3.png"
                            alt="phones"
                            width={800}
                            height={340}
                            className='flex flex-1 items-center justify-end rounded-xl' />
                    </div>

                    <div className="text-right mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base text-justify leading-7 text-gray-600">
                            Discover the soul of Tamil Nadu through its signature dishes. 
                            Our digital archive is a celebration of the vibrant and diverse culinary heritage 
                            that has been passed down through generations that defines this southern state of India. 
                            From the bustling streets of Chennai to the serene landscapes of Madurai, each dish tells 
                            a tale of tradition, history, and flavors that have withstood the test of time. 
                        </dt>

                    </div>

                </dl>
            </div>
        </div>
    )
}

export default Feature9
