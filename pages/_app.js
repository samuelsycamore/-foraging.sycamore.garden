import '@/css/tailwind.css'
import '@/css/prism.css'
import '@fontsource/inter/variable-full.css'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import LayoutWrapper from '@/components/LayoutWrapper'

const isDevelopment = process.env.NODE_ENV === 'development'

export default function App({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="ediblewild.info">
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {isDevelopment}
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </PlausibleProvider>
  )
}
