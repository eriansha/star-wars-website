import Link from 'next/link'
import React from 'react'

import { LINKS, SOCIAL_MEDIAS } from './constant'

export default function Footer() {
  return (
    <footer className='bg-black pb-5 w-full'>
      <main className='border-t flex flex-col items-center layout pt-6'>
        <p
          data-testid='links'
          className='flex flex-wrap gap-x-8 gap-y-4 justify-center'
        >
          {LINKS.map((link, key) => (
            <Link key={key} href={link.href}>
              {link.label}
            </Link>
          ))}
        </p>
        <div data-testid='social-medias' className='flex mt-5 space-x-4'>
          {SOCIAL_MEDIAS.map((socialMedia, key) => (
            <a
              key={key}
              href={socialMedia.href}
              rel='noreferrer'
              target='_blank'
            >
              {socialMedia.label}
            </a>
          ))}
        </div>
        <p
          data-testid='author'
          className='mt-8 text-gray-600 text-sm dark:text-gray-300'
        >
          {'© Muhamad Ivan Putra Eriansya 2022'}
        </p>
      </main>
    </footer>
  )
}
