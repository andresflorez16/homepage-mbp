import { useRef, useContext, useCallback } from 'react'
import { 
  Box,
  Heading,
  Text,
} from '@chakra-ui/react'
import { ScrollContext } from '../utils/scroll-observer'
import { Section } from './section'

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
      opacity={progress > 0.39 ? '0.2' : '1'}
      zIndex={progress > 0.39 ? '-10' : '0'}
    >
      <Box w={{ base: '90%', md: '60%' }}>
        <Section delay={0.3}>
          <Heading variant='_title'>
            Andrés Florez
          </Heading>
          <Text variant='_section'>
            App Developer
          </Text>
          <Box m='0 auto' w='90%' textAlign='justify'>
            Andrés is a freelance and full-stack developer who loves planning, designing and find ways to solve real-life problems with code, furthermore he has a knack for fast-learning and autonomous learning. When not online, he likes go to the gym, hang out, listen music, and watch movies/series.
          </Box>
        </Section>
      </Box>
    </Box>
  )
}
