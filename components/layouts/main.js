import { Box } from '@chakra-ui/react'
import { Navbar } from '../navbar'
import { Scene } from '../voxel'

export const Layout = ({ children }) => {
  return (
    <Box
      minH='100vh'
    >
      <Navbar />
      {children}
    </Box>
  )
}
