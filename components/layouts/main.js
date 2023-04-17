import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { Navbar } from '../navbar'
import { Footer } from '../footer'

const originPath = (typeof window !== 'undefined') ? window.location.origin : ''

export const Layout = ({ children }) => {
  return (
    <Box
      minH='100vh'
    >
      <Head>
        <meta name='twitter:title' content='Andrés Florez' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@andresflorezdev' />
        <meta name='twitter:creator' content='@andresflorezdev' />
        <meta name='twitter:image' content={`${originPath}/card.jpeg`} />
        <meta name='author' content='Andrés Florez' />
        <meta name='description' content='Andrés Florez Website' />
        <meta property='og:site_name' content='Andrés Florez' />
        <meta property='og:description' content='Andrés Florez Website' />
        <meta property='og:image' content={`${originPath}/card.jpeg`} />
        <link rel='apple-touch-icon' href='andres.png' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}
