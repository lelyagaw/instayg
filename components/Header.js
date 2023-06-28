import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
        {/* Left */}

        <div className='flex items-center justify-between max-w-6xl'>
            <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                <Image
                    src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016-1536x436.png"
                    layout='fill'
                    className='object-contain'
                />
            </div>
            <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                <Image
                    src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg"
                    layout='fill'
                    className='object-contain'
                />
            </div>
            <h1>Right Side</h1>
        </div>

        {/* Center */}

        {/* Right */}
    </div>
  )
}
