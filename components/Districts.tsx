import Image from "next/image"

const districts = [
    {
      name: 'Viruthunagar',
      href : '/districts/viruthunagar',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-16 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {districts.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <a href={person.href} className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  