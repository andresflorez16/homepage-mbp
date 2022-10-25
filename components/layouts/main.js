import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'
import { Navbar } from '../navbar'
import { Footer } from '../footer'

export const Layout = ({ children }) => {
  return (
    <Box
      minH='100vh'
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}
