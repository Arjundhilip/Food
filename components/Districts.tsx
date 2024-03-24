import Image from "next/image"
import { districts } from "@/constants/districts"

const articles = [
  {
    title: 'Lorem Ipsum',
    author: 'John Doe',
    date: '2024-03-16',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  // Add more articles as needed
];
const districtsToShow = districts.slice(0, 4);

export default function Example() {
  return (

    <section>

      <div className="bg-white py-10 sm:py-10">
        <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-20 px-6 lg:px-8">
          <div className="md:w-900">
            <h2 className="text-3xl font-bold tracking-tight text-[#BE1E2D] sm:text-4xl">Districts</h2>
            <p className="text-justify my-4 text-sm text-gray-600">
              To celebrate the culinary diversity of our state through its districts, we have meticulously curated a collection that showcases the unique flavors, ingredients, and traditions of each district. From the rugged terrain of our mountainous districts to the fertile plains of our agricultural heartlands, each district has its own distinct identity shaped by its natural landscape, historical heritage, and local communities.
            </p>
          </div>
        </div>

        {/*<div className="mx-auto grid max-w-6xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
           <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Districts</h2>
            <p className="text-justify mt-6 text-sm text-gray-600">
              To celebrate the culinary diversity of our state through its districts, we have meticulously curated a collection that showcases the unique flavors, ingredients, and traditions of each district. From the rugged terrain of our mountainous districts to the fertile plains of our agricultural heartlands, each district has its own distinct identity shaped by its natural landscape, historical heritage, and local communities.
            </p>
          </div> 
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {districts.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image className="rounded-full object-fill object-center group-hover:opacity-75" src={person.imageUrl} alt="" width={60} height={60} />
                  <div>
                    <a href={person.href} className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>*/}

        <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-20 px-6 py-4 lg:px-8 sm:grid-cols-3">
          {districts.map((district) => (
            <div key={district.name}>
              <a href={district.href}>
                <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <div className="image-container">
                      <Image
                        src={district.imageUrl}
                        alt="phones"
                        width={800}
                        height={340}
                        className="object-cover image transform hover:scale-110 transition-transform duration-300 ease-in-out"
                      />
                      <div className="overlay-text">
                        <p className="text-center text-white text-[12px]">{district.name}</p>
                      </div>
                    </div>
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

    </section>

  )
}
