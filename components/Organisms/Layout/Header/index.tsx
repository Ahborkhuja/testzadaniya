import React, { useState } from 'react'
import { options } from './options'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeaderLayout = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">

        <div className="flex items-center">
          <Image
            src="/next.svg"
            alt="Logo"
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
        </div>

        <div className="hidden md:flex space-x-4">
          {options.map((value, index) => (
            // here need to add for UX it can be known by user in which tab he is  
            <Link key={index} href={value.path} replace className={``}>
              {value.name}
            </Link>
          ))}
        </div>

        {/* Right section: Login button */}
        <div className="flex items-center">
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}

export default HeaderLayout