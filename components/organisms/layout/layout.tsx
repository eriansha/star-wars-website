import { ReactElement } from 'react'

import Footer from '@/molecules/footer'
import Header from '@/molecules/header'

interface LayoutProps {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='h-screen'>
      <Header />

      {children}

      <Footer />
    </div>
  )
}

export default Layout
