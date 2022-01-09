import { ReactElement } from 'react'

import Footer from '@/organisms/footer'
import Header from '@/organisms/header'

interface LayoutProps {
  children: ReactElement
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='min-h-screen relative'>
      <Header />

      {/* content */}
      <div className='flex-1'>
        {children}

        <Footer />
      </div>
    </div>
  )
}
