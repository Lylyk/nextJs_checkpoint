'use client'

import Image from 'next/image'
import { Link } from 'react-scroll'
import React from 'react'
import Social from '@/components/social'

const Footer = () => {
  return (
    <section className='bg-gradient-to-r from-pink-200 to-yellow-200 py-8'>
      <div className='container flex flex-col items-center justify-between gap-4 xl:flex-row'>
        <p className='text-xl font-semibold uppercase text-gray-800 hover:text-gray-600 transition duration-300'> 
          <span>® 2024</span> Arnaud Igor
        </p>
        <Link to='/' spy={true} smooth={true} className='cursor-pointer'>
          <Image src='/logo.svg' width={54.08} height={336.65} alt='logo' />
        </Link>
        <div className='flex space-x-4'>
          <Social />
        </div>
      </div>
      <div className='mt-4 text-center text-gray-600'>
        <p>Designed with ❤️ by Lydia Karelle</p>
      </div>
    </section>
  )
}

export default Footer
