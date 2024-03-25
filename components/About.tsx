import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const cooking = [
  {
    
    "name": 'Documentation Galore:',
    "description": 'Imagine a virtual voyage through Tamil Nadu’s 38 districts, each stop introducing you to its signature savories and beloved bites. We’re here to make sure every zest and method stays true to its roots, keeping it real for you and the generations to come.',
    
  },

  {
    
    "name": 'Preservation & Pride:',
    "description": 'It’s not just about jotting down recipes; it’s about narrating the tales behind the tastes. We’re all about encapsulating the stories, the heritage, and the cultural vibe that make each dish more than just a meal. It’s a journey through time and tradition.',
   
  },

  {
    "name": 'Spread the Word:',
    "description": 'Knowledge is to be shared, and we’re all about sprinkling the spice of wisdom. Get ready to dive into the depths of Tamil Nadu’s culinary diversity and embrace the rich food saga through our digital chapters.',
   
  },

]

const maps = [
  {    
    "name": '',
    "description": 'From the lively lanes of Chennai to the tranquil terrains of Kanyakumari, our archive is a ticket to every corner of Tamil Nadu. Discover, relish, and celebrate the essence of each district with us.', 
  },
]

const discover = [
  {
    
    "name": 'Signature Spectacles:',
    "description": 'Venture into the heart of Tamil Nadu with over 50 signature dishes, each narrating its own tale of regional uniqueness and culinary creativity.',
    
  },

  {
    
    "name": 'Popular Picks:',
    "description": 'But wait, there’s more! With over 250 popular dishes cataloged, we ensure you get a full plate of Tamil Nadu’s culinary grandeur.',
   
  },

  {
    "name": '',
    "description": 'So, are you ready to embark on this flavorful journey with us? Dive in and explore the tales, tastes, and traditions that make Tamil Nadu a culinary treasure trove.',
   
  },

]



const About = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">

            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#BE1E2D]">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tamil Nadu Culinary Archive</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Welcome to the Tamil Nadu Culinary Archive, a digital sanctuary dedicated to safeguarding and celebrating the rich culinary heritage of Tamil Nadu.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We’re here in a time when quick bites and global menus seem to outshine our local gastronomy legends. But guess what? We’re setting the stage to make sure the vibrant mosaic of Tamil Nadu’s food culture gets the spotlight it deserves, safeguarding it for the beats and bites of future generations.
              </p>
            </div>

            <div className="lg:max-w-lg">
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <h2 className="text-2xl font-semibold leading-7 text-[#BE1E2D]">What’s Cooking?</h2>
                  <Image
                    src='/icons/cooking.png'
                    alt='{dish.imageAlt}'
                    width={30}
                    height={30}
                    className="absolute left-1 top-1 h-5 w-5 text-[#BE1E2D]"
                  />
                </div>
              </dl>

              <dl className="mt-4 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {cooking.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:max-w-lg">
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <h2 className="text-2xl font-semibold leading-7 text-[#BE1E2D]">Across the Map</h2>
                  <Image
                    src='/icons/land.png'
                    alt='{dish.imageAlt}'
                    width={30}
                    height={30}
                    className="absolute left-1 top-1 h-5 w-5 text-[#BE1E2D]"
                  />
                </div>
              </dl>

              <dl className="mt-4 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {maps.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:max-w-lg">
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <h2 className="text-2xl font-semibold leading-7 text-[#BE1E2D]">Dishes to Discover</h2>
                  <Image
                    src='/icons/fruits.png'
                    alt='{dish.imageAlt}'
                    width={30}
                    height={30}
                    className="absolute left-1 top-1 h-5 w-5 text-[#BE1E2D]"
                  />
                </div>
              </dl>

              <dl className="mt-4 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {discover.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

          </div>
          <Image
            src="/districts/Chennai/Chennai_1.jpg"
            alt="Product screenshot"
            className=" aspect-[9/14] border-2 rounded-xl mt-20 md:-ml-2 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default About
