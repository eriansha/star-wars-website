import Image from 'next/image'

export default function Header() {
  return (
    <div className='bg-black'>
      <Image
        width={200}
        height={100}
        src='/img/brand.png'
        alt='starwars banner'
      />
    </div>
  )
}
