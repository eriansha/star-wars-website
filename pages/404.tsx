import Image from 'next/image'

export default function Custom404() {
  return (
    <section className='bg-black flex flex-col h-full items-center'>
      <Image
        src='/img/404.jpeg'
        width={400}
        height={400}
        quality={100}
        alt='not found'
      />
      <h1 className='font-light pb-16 text-4xl'>Are you lost?</h1>
    </section>
  )
}
