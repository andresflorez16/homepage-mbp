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
    w={[280, 300, 380]}
    h={[280, 300, 380]}
    position='relative'
    bg={useColorModeValue('ligth_beige', 'hardDark')}
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
