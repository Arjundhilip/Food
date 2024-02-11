const products = [
    {
        id: 1,
        name: 'Thirunelvi Halwa',
        href: '#',
        price: '$48',
        imageSrc: 'https://www.feastingathome.com/wp-content/uploads/2021/12/vegetarian-dinner-recipes-2.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Manaparai Murukku',
        href: '#',
        price: '$35',
        imageSrc: 'https://hurrythefoodup.com/wp-content/uploads/2020/09/55-Vegetarian-Indian-Recipes.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Kovilpatti Kadalamittai',
        href: '#',
        price: '$89',
        imageSrc: 'https://pipingpotcurry.com/wp-content/uploads/2021/04/indian-onion-salad.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Butter Chicken',
        href: '#',
        price: '$35',
        imageSrc: 'https://hurrythefoodup.com/wp-content/uploads/2020/09/55-Vegetarian-Indian-Recipes.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]


export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h1 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Signature Dishes</h1>
                <div className="mt-10 flex items-center justify-center grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
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
