import ScrollObserver from '../utils/scroll-observer'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </ChakraProvider>
  )
}

export default MyApp
