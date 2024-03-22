import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Our Mission.',
    description:
      'In an era where fast food and global cuisine are overshadowing regional culinary traditions, our goal is to ensure that the rich tapestry of Tamil Nadu food culture is preserved for future generations. We believe that food is more than just sustenance; it is a language that communicates the history, culture, and soul of a community.',
    icon: CloudArrowUpIcon,
  },

  {
    name: 'Documentation:',
    description: 'We meticulously document the signature dishes and popular recipes from all 38 districts of Tamil Nadu, ensuring every flavor and technique is preserved in its authentic form.',
    icon: LockClosedIcon,
  },
  {
    name: 'Preservation:',
    description: 'Archiving the stories, history, and cultural significance behind each dish, providing a comprehensive look at Tamil Nadu\'s culinary heritage beyond just recipes.',
    icon: LockClosedIcon,
  },
  {
    name: 'Education:',
    description: 'Spreading knowledge and fostering appreciation for Tamil Nadu’s diverse culinary traditions through our digital platform.',
    icon: LockClosedIcon,
  },
  {
    "name": "38 Districts",
    "description": "Our archive covers every one of the 38 districts in Tamil Nadu, from the bustling streets of Chennai to the serene landscapes of Kanyakumari.",
    "icon": LockClosedIcon,
  },
  {
    "name": "Signature Dishes",
    "description": "We have documented over 50 signature dishes, each a testament to the regional diversity and culinary ingenuity of Tamil Nadu.",
    "icon": LockClosedIcon,
  },
  {
    "name": "Popular Dishes",
    "description": "In addition to signature recipes, we've cataloged over 250 popular dishes, ensuring a comprehensive collection that represents the breadth of Tamil cuisine.",
    "icon": LockClosedIcon,
  }
]

const About = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tamil Nadu Culinary Archive</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Welcome to the Tamil Nadu Culinary Archive, a digital sanctuary dedicated to safeguarding and celebrating the rich culinary heritage of Tamil Nadu.
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
            src="/districts/Chennai/Chennai_1.jpg"
            alt="Product screenshot"
            className=" aspect-[4/5] w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default About
