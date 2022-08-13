import { useRef, useContext, useCallback } from 'react'
import { ScrollContext } from '../utils/scroll-observer'
import { 
  Box,
  Heading,
  Text,
} from '@chakra-ui/react'

export const AboutMe = () => {
  const refContainer = useRef(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0
  
  const { current: container } = refContainer

  if (container) {
    progress = Math.min(1, scrollY / container.clientHeight)
  }

  return (
    <Box
      ref={refContainer}
      minH='100vh'
      display='flex'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      position='sticky'
      top='0'
      zIndex={progress > 0.61 ? '-10' : '0'}
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <Heading 
        opacity={progress > 0.30 ? '0.2' : '1'}
        transition={`opacity .2s ease-out`}
        variant='_title'
      >
        Andrés Florez
      </Heading>
      <Text variant='_section'>
        App Developer
      </Text>
    </Box>
  )
}
