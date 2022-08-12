import { useRef, useContext, useCallback } from 'react'
import { ScrollContext } from '../utils/scroll-observer'
import { 
  Box,
  Heading,
  Text
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
      zIndex={progress > 0.64 ? '-10' : '1'}
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <Heading 
        color='black'
        zIndex='11'
      >
        About me
      </Heading>
    </Box>
  )
}
