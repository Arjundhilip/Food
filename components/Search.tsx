'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'


const Search = () => {

  return (
    <div className='relative rounded-md shadow-sm'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 '>
        <MagnifyingGlassIcon
          className='h-5 w-5 text-gray-400 cursor-pointer'
          aria-hidden='true'
        />

      </div>
      <input
        placeholder='Search Foods...'
        className='block w-full rounded-full border-0 py-1 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400'
      />
    </div>
      )
}

      export default Search