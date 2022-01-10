import Image from 'next/image'

import BasicLayout from '@/templates/basic-layout'

export default function Custom404() {
  return (
    <BasicLayout>
      <section className='bg-black flex flex-col items-center'>
        <div className='my-16'>
          <Image
            src='/img/404.jpeg'
            width={500}
            height={500}
            quality={100}
            alt='not found'
          />
        </div>
        <h1 className='font-light pb-16 text-4xl'>Are you lost?</h1>
      </section>
    </BasicLayout>
  )
}
