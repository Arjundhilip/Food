'use client'
import Image from "next/image"
import { districts } from "@/constants/districts"

const districtsToShow = districts.slice(0, 4);

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-6 sm:px-10 sm:py-6 mb-8 lg:max-w-7xl lg:px-8">
                <h1 className="my-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Districts</h1>

                <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-20 px-6 py-4 lg:px-8 md:grid-cols-2 lg:grid-cols-4">
                    {districtsToShow.map((district) => (
                        <div key={district.name}>
                            <a href={district.href}>
                                <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                                    <div className="relative">
                                        <Image
                                            src= {district.imageUrl}
                                            alt="phones"
                                            width={800}
                                            height={340}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="px-6 py-4 hover:bg-[#00ABA6]">
                                        <p className="text-base font-semibold leading-7 tracking-tight hover:text-white text-gray-900">{district.name}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}
