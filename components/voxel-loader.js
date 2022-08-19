import { forwardRef} from 'react'
import { Box, Spinner, useColorModeValue } from '@chakra-ui/react'

export const Loading = () => (
  <Box
    w='100%'
    h='100%'
    display='grid'
    placeItems='center'
  >
  <Spinner size='xl'/>
  </Box>
)

export const ModelLoader = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    m='0 auto'
    w={[280, 320, 420]}
    h={[280, 320, 420]}
    position='relative'
    bg={useColorModeValue('#CCF2F4', '#222')}
  >
    {children}
  </Box>
))

export const Loader = () => {
  return (
    <ModelLoader>
      <Loading />
    </ModelLoader>
  )
}
