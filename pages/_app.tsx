import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div id="layout">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
