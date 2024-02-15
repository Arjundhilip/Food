import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
]


const products = [
  {
      id: 1,
      name: 'Thirunelvi Halwa',
      href: '#',
      price: '$48',
      imageSrc: '/food1.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
      id: 2,
      name: 'Manaparai Murukku',
      href: '#',
      price: '$35',
      imageSrc: '/food3.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
      id: 3,
      name: 'Kovilpatti Kadalamittai',
      href: '#',
      price: '$89',
      imageSrc: '/food1.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
      id: 4,
      name: 'Butter Chicken',
      href: '#',
      price: '$35',
      imageSrc: '/food3.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]


const Coimbatore = () => {
  return (
    <section>
    <div className="overflow-hidden bg-white sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">#D1</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Coimbatore</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/districts/Coimbatore.png"
            alt = "Coimbatore"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Signature Dishes</h1>
        <div className="mt-10 flex items-center justify-center grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
    </section>
  )
}


export default Coimbatore
