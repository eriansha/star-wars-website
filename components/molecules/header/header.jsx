import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <section className='bg-gray-dark border-b-2 border-gray flex gap-5 items-center justify-content-start pl-5 py-5'>
      <Link href='/'>
        <a>
          <Image
            width={75}
            height={50}
            layout='fixed'
            src='/img/brand.png'
            alt='starwars banner'
          />
        </a>
      </Link>

      {LINKS.map((link, key) => (
        <Link key={key} href={link.href}>
          {link.label}
        </Link>
      ))}
    </section>
  )
}
