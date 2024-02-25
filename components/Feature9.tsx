import React from 'react'
import Image from 'next/image'

const Feature9 = () => {
    return (
        <div className="bg-white py-24 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">

                    <div className="text-left mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600 pb-4">Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.
                        </dt>
                        <dt className="align-bottom text-base leading-7 text-gray-600">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the.

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
                        <dt className="text-base leading-7 text-gray-600">Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type.
                        </dt>

                    </div>

                </dl>
            </div>
        </div>
    )
}

export default Feature9
