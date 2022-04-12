import { useEffect, ReactElement, ReactNode, useState } from 'react'
import { NextPage } from 'next'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo'

import 'styles/main.sass'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const getLayout = Component.getLayout ?? ((page) => page)
  const [icons, setIcons] = useState<[]>([])

  useEffect(() => {
    async function SetIcons() {
      const icons = await fetch('/json/icons.json')
      const json = await icons.json()
      setIcons(json)
    }
    SetIcons()
  }, [])

  return (
    <>
      <Head>
        <title>Facundo Cachan</title>
        <link href="/favicon.ico" rel="icon" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta name="theme-color" content="magenta" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
        /> */}
        <meta name="description" content="Facundo Cachan" />
        <link rel="icon" href="/img/icons/logo.svg" />
        <meta name="application-name" content="Facundo Cachan - PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/img/icons/logo.svg" />
        {icons.map(({ src, sizes }, index: number) => (
          <link key={index} rel="apple-touch-icon" sizes={sizes} href={src} />
        ))}
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/img/icons/logo.svg"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="16x16"
          href="/img/icons/logo.svg"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="mask-icon" href="/img/icons/logo.svg" color="transparent" />
        <link rel="shortcut icon" href="/img/icons/logo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://facundo-cachan.com" />
        <meta name="twitter:title" content="PWA App" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta
          name="twitter:image"
          content="https://facundo-cachan.com/img/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Facundo Cachan" />
        <meta
          property="og:description"
          content="Facundo Cachan Software Developer"
        />
        <meta property="og:site_name" content="Facundo Cachan" />
        <meta property="og:url" content="https://facundo-cachan.com" />
        <meta
          property="og:image"
          content="https://facundo-cachan.com/img/yo.svg"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        {getLayout(<Component {...pageProps} loading={true} />)}
      </ApolloProvider>
    </>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.NODE_ENV === 'test') {
    require('utils/wdyr')
    console.log(metric)
  }
}

export default App
