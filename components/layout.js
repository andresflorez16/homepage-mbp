import { Box } from '@chakra-ui/react'

export const Layout = ({ children }) => {
  return (
    <Box
      minH='100vh'
    >
      {children}
    </Box>
  )
}
