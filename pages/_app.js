import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from '../lib/theme'
import { Layout } from '../components/layouts/main'
import Fonts from '../components/fonts'
import ScrollObserver from '../utils/scroll-observer'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Layout>
          <ScrollObserver>
              <Component {...pageProps} />
          </ScrollObserver>
        </Layout>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
