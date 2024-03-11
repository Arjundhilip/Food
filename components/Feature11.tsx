import Image from 'next/image'

const products = [
    {
        id: 1,
        name: 'Coimbatore',
        href: '#',
        price: '$48',
        imageSrc: '/districts/sq_districts/coimbatore.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Coimbatore',
        href: '#',
        price: '$35',
        imageSrc: '/districts/sq_districts/coimbatore.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Coimbatore',
        href: '#',
        price: '$89',
        imageSrc: '/districts/sq_districts/coimbatore.png',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Coimbatore',
        href: '/dishes/butterchicken',
        price: '$35',
        imageSrc: '/districts/sq_districts/coimbatore.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]


export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-6 sm:px-10 sm:py-6 mb-8 lg:max-w-7xl lg:px-8">
                <h1 className="my-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Districts</h1>
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
    )
}
