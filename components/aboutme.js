import { useRef, useContext } from 'react'
import Image from 'next/image'
import { 
  Box,
  Heading,
  Text,
  chakra,
  useColorModeValue
} from '@chakra-ui/react'
import { ScrollContext } from '../utils/scroll-observer'
import { Section } from './section'
import { Scene } from './voxel'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

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
      minH={{ base: 'auto', md: '100vh' }}
      display='flex'
      flexDir={[ 'column', 'column', 'column', 'column', 'row' ]}
      justifyContent='center'
      alignItems='center'
      position={{ base: 'static', xl: 'sticky' }}
      top='0'
      zIndex={progress > 0.1 ? '-10' : '0'}
      w={{ base: 'full', md: '70%' }}
      m='0 auto'
      mt={{ base: '10' }}
      p={15}
    >
      <Scene />
      <Box
        w={{ base: '92%', sm: '90%', md: '95%', xl: '60%' }}
      >
        <Section delay={0.3}>
          <Box
            m='0 auto'
            p={2}
            borderRadius='lg'
            bg='gray.300'
            textAlign='center'
            mb={3}
            mt={3}
            w={{ base: 'full' }}
          >
            <Text color='#111' fontSize={15}>Hi, i'm an app developer based in Colombia!</Text>
          </Box>
          <Box
            m='0 auto'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Heading size={{ base: 'lg' }}>
              Andrés Florez
              <Text fontSize='md' fontWeight='normal'>
                App Developer
              </Text>
            </Heading>
            <Box
              w={{ base: '100px', md: '150px' }}
              h={{ base: '100px', md: '150px' }}
              flexShrink={0}
              borderColor='cyan'
              borderWidth={2}
              borderStyle='solid'
              borderRadius='full'
            >
              <ProfileImage src='/andrew.jpg' borderRadius='full' width='200%' height='200%' alt='Andrés' />
            </Box>
          </Box>
          <Box 
            m='0 auto' 
            mt={3} 
            textAlign='justify'
          >
            <Text fontSize={['sm', 'md']}>Andrés is a freelance and full-stack developer who loves planning, designing and find ways to solve real-life problems with code, furthermore he has a knack for fast-learning and autonomous learning. When not online, he likes go to the gym, hang out, listen music, and watch movies/series.</Text>
          </Box>
        </Section>
      </Box>
    </Box>
  )
}
