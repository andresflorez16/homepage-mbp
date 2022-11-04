import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from '../lib/theme'
import { Layout } from '../components/layouts/main'
import Fonts from '../components/fonts'
import ScrollObserver from '../utils/scroll-observer'
import SizeObserver from '../utils/size-observer'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AnimatePresence 
        exitBeforeEnter 
        initial={true}
        onExitComplete={() => {
          if (typeof window != 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}
      >
        <SizeObserver>
          <Layout>
            <ScrollObserver>
              <Component {...pageProps} />
            </ScrollObserver>
          </Layout>
        </SizeObserver>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
