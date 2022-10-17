import NextLink from 'next/link'
import { 
  Box,
  Heading,
  Button,
  useColorModeValue,
  Link,
  Icon,
  Text
} from '@chakra-ui/react'
import { 
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoArrowRedoCircleSharp
} from 'react-icons/io5'
import { Section } from './section'

const AppProfile = ({ app, profile, url }) => (
  <Link 
    mt={5}
    display='inline-block'
    href={url} 
    target='_blank'
  >
    <Button
      size='lg'
      variant='ghost'
      colorScheme='orange_link'
      leftIcon={<Icon as={app} />}
    >
      {profile}
    </Button>
  </Link>
)

export const Web = () => {
  return (
    <Box
      bg={useColorModeValue('light_smoothBlue', 'smoothWhite')}
      minH='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDir='column'
      color='#000'
      w='100%'
    >
      <Section
        delay={0.3}
      >
        <Heading
          variant='_title'
          textAlign='center'
        >
          I🖤
        </Heading>
        <Text textAlign='center' p={3}>
          Go to Gym💪🏽, movies/series🎬, hang out, beers🍺
        </Text>
      </Section>
      <Section
        delay={0.3}
        p={5}
        w='100%'
        display='flex'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
      >
        <Heading variant='_title' textAlign='center'>On the web</Heading>
        <Box
          w={{ base: 'full', md: '70%' }}
          pl={4}
        >
          <AppProfile app={IoLogoGithub} profile='andresflorez16' url='https://github.com/andresflorez16' />
          <AppProfile app={IoLogoInstagram} profile='@andresflorez.dev' url='https://www.instagram.com/andresflorez.dev/' />
          <AppProfile app={IoLogoLinkedin} profile='Andres Florez' url='https://www.linkedin.com/in/andres-florez-2031121bb/' />
          <AppProfile app={IoLogoTwitter} profile='@andresflorezdev' url='https://twitter.com/andresflorezdev' />
        </Box>
        <NextLink href='/works'>
          <Link>
            <Button
              m={5}
              variant='solid'
              size='lg'
              colorScheme='orange'
              rightIcon={<Icon as={IoArrowRedoCircleSharp} />} 
            >
              Works
            </Button>
          </Link>
        </NextLink>
      </Section>
    </Box>
  )
}
