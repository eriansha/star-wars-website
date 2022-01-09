import clsxm from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

export const LINKS = [
  {
    label: 'Movie',
    href: '/films'
  },
  {
    label: 'People',
    href: '/people'
  },
  {
    label: 'Planet',
    href: '/planet'
  },
  {
    label: 'Species',
    href: '/species'
  },
  {
    label: 'Starship',
    href: 'starship'
  }
]

export default function Header() {
  const [isSidebarOpen, setIsSideBarOpen] = useState(true)

  const toggleSideBar = () =>
    setIsSideBarOpen((prevState: boolean) => !prevState)

  return (
    <>
      {/* navbar */}
      <div className='border-b-2 sticky top-0 z-10 bg-gray-dark border-gray flex justify-start'>
        {/* logo */}
        <div className=''>
          <Link href='/'>
            <a className='block'>
              <Image
                width={150}
                height={75}
                layout='fixed'
                src='/img/brand.png'
                alt='starwars banner'
              />
            </a>
          </Link>
        </div>

        <div className='hidden items-center justify-start md:flex'>
          {LINKS.map((link, key) => (
            <nav key={key}>
              <Link href={link.href}>
                <a className='px-4 py-2'>{link.label}</a>
              </Link>
            </nav>
          ))}
        </div>

        {/* mobile menu button */}
        <button
          onClick={toggleSideBar}
          className='ml-auto p-4 md:hidden focus:bg-gray-700 focus:outline-none'
        >
          <FaBars className='h-5 w-5' />
        </button>
      </div>

      {/* sidebar */}
      <div
        className={clsxm(
          'absolute bg-gray-dark duration-200 ease-in-out inset-y-0 left-0 px-2 space-y-6',
          'text-blue-100 transform transition w-64 z-20 md:hidden md:relative md:translate-x-0',
          isSidebarOpen && '-translate-x-full'
        )}
      >
        {/* logo */}
        <Link href='/'>
          <a className='flex items-center px-2 space-x-2'>
            <Image
              width={200}
              height={100}
              layout='fixed'
              src='/img/brand.png'
              alt='starwars banner'
            />
          </a>
        </Link>

        {/* nav */}
        {LINKS.map((link, key) => (
          <nav key={key}>
            <Link href={link.href}>
              <a className='block px-4 py-2'>{link.label}</a>
            </Link>
          </nav>
        ))}
      </div>
    </>
  )
}
