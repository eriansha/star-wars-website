import type { AppProps } from 'next/app'

import '../styles/globals.css'

import BasicLayout from '@/templates/basic-layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  )
}

export default MyApp
