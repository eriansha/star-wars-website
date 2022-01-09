import { ReactElement } from 'react'

import Footer from '@/molecules/footer'
import Header from '@/molecules/header'

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
