import ScrollObserver from '../utils/scroll-observer'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </ChakraProvider>
  )
}

export default MyApp
