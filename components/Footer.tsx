import React, { ReactNode } from "react";
import Link from "next/link"
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';


const Footer = () => {
  return (


    <footer className="bg-white dark:bg-white bottom-0 left-0 right-0">
      <div className="mx-auto container px-6 py-8 padding-container relative z-30">

        <div className="flex flex-col items-center text-center mt-18">
          <a href="#">
            <Image
              src="/logo.png"
              alt="Map of virudhunagar"
              width={300}
              height={70}
              className="w-auto aspect-[16/9]" />
          </a>

          <div className="flex flex-wrap justify-between mt-0 -mx-4">
            <a href="#" className="mx-4 text-sm font-semibold leading-6 text-gray-900" aria-label="Reddit">10966 <br /> <strong>SIGNATURE DISHES</strong></a>
            <a href="#" className="mx-4 text-sm font-semibold leading-6 text-gray-900" aria-label="Reddit">10966 <br /> <strong>POPULAR DISHES</strong></a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-700">© Copyright 2024. All Rights Reserved.</p>
          <div className="-mx-2 flex">
            <Link href="/about" className="text-sm text-gray-500 dark:text-gray-700 mx-2">About</Link>
            <p className="text-sm text-gray-500 dark:text-gray-700 mx-2">Sitemap</p>
            <p className="text-sm text-gray-500 dark:text-gray-700 mx-2">References</p>
            <p className="text-sm text-gray-500 dark:text-gray-700 mx-2">Terms & Conditions</p>
          </div>

          <div className="-mx-2 flex">
            <p className="text-sm text-gray-500 dark:text-gray-700">Follow us on</p>
            <a href="#" className="mx-2 text-gray-900 transition-colors duration-300 dark:text-gray-700 hover:text-blue-900 dark:hover:text-blue-400" aria-label="Reddit">
              <FaFacebook />
            </a>
            <a href="#" className="mx-2 text-gray-900 transition-colors duration-300 dark:text-gray-700 hover:text-blue-900 dark:hover:text-blue-400" aria-label="Github">
              <FaInstagram />
            </a>
            <a href="#" className="mx-2 text-gray-900 transition-colors duration-300 dark:text-gray-700 hover:text-blue-900 dark:hover:text-blue-400" aria-label="Github">
              <FaPinterest />
            </a>
          </div>
        </div>

      </div>
    </footer>



  );
};

export default Footer;


