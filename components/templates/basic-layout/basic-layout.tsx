import Head from 'next/head'
import { ReactElement } from 'react'

import Footer from '@/organisms/footer'
import Header from '@/organisms/header'

interface LayoutProps {
  className?: string
  children: ReactElement | ReactElement[]
}

export default function BasicLayout({ className, children }: LayoutProps) {
  return (
    <div className='min-h-screen relative'>
      <Head>
        <title>{'Star Wars Movie Page'}</title>
        <meta
          name='description'
          content='A Star Wars website using SWAPI GraphQL'
        />
        <meta name='og:title' content={'Star Wars Movie Page'} />
      </Head>
      <Header />

      {/* content */}
      <div className='flex-1'>
        <main className={className}>{children}</main>

        <Footer />
      </div>
    </div>
  )
}
