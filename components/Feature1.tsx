import Image from 'next/image'

const products = [
    {
        id: 1,
        name: 'Srivilliputhur Palkova',
        href: '/dishes/signature/srivilliputhurpalkova',
        imageSrc: '/Ingredients/Palkova.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Manaparai Murukku',
        href: '#',
        price: '$35',
        imageSrc: '/Ingredients/Palkova.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Kovilpatti Kadalamittai',
        href: '#',
        price: '$89',
        imageSrc: '/Ingredients/Palkova.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Butter Chicken',
        href: '/dishes/butterchicken',
        price: '$35',
        imageSrc: '/Ingredients/Palkova.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]


export default function Example() {
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-10 sm:py-6 mb-8 lg:max-w-7xl lg:px-8">
            <h1 className="my-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Signature Dishes</h1>

            <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-20 px-6 py-4 lg:px-8 md:grid-cols-2 lg:grid-cols-4">
                {products.map((dish) => (
                    <div key={dish.name} className="transform hover:scale-110 transition-transform duration-300 ease-in-out">
                        <a href={dish.href}>
                            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                                <div className="relative">
                                    <Image
                                        src={dish.imageSrc}
                                        alt={dish.imageAlt}
                                        width={800}
                                        height={340}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="px-6 py-4 hover:bg-[#00ABA6]">
                                    <p className="text-base font-semibold leading-7 tracking-tight hover:text-white text-gray-900">{dish.name}</p>
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
