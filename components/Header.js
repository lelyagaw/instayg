import Image from 'next/image'
import React from 'react'
import { HomeIcon } from '@heroicons/react/24/outline'
import { Input } from 'postcss'

export default function Header() {
  return (


        <div className='flex items-center justify-between max-w-6xl'>
                    {/* Left */}
            <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                <Image
                    src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016-1536x436.png"
                    layout='fill'
                    className='object-contain'
                />
            </div>
            <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                <Image
                    src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-icon-download-icons-12.png"
                    layout='fill'
                    className='object-contain'
                />
            </div>
        {/* Center */}
            <div className='relative mt-1'>
                <div className='absolute top-2 left-2'>
                    <HomeIcon className='h-5 w-5'/>
                </div>
                <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'/>    
            </div>

        {/* Right */}
            <h1>Right Side</h1>
        </div>


  )
}
