import NextLink from 'next/link'
import {
  Box,
  Heading,
  Button,
  useColorModeValue,
  Link,
  Icon,
  Text,
  SimpleGrid
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
    href={url}
    target='_blank'
    textAlign={{ md: 'center' }} rel='noreferrer'
  >
    <Button
      m='0 auto'
      size='lg'
      variant='ghost'
      colorScheme='orange_link'
      leftIcon={<Icon boxSize={10} as={app} />}
    >
      {profile}
    </Button>
  </Link>
)

export const Web = () => {
  return (
    <Box
      bg={useColorModeValue('light4', '#222')}
      minH='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDir='column'
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
        <Text textAlign='center' p={3} fontSize={18}>
          Go to Gym💪🏽, movies/series🎬, hang out, beers🍺
        </Text>
      </Section>
      <Section
        delay={0.3}
        w={{ base: 'full', md: '70%' }}
        mt={5}
      >
        <Heading variant='_title' textAlign='center'>On the web</Heading>
        <SimpleGrid
          columns={[1, 1, 2]}
          h={{ base: 'auto', md: '20vh' }}
          p={3}
          gap={3}
        >
          <AppProfile app={IoLogoGithub} profile='andresflorez16' url='https://github.com/andresflorez16' />
          <AppProfile app={IoLogoInstagram} profile='@andresflorez.dev' url='https://www.instagram.com/andresflorez.dev/' />
          <AppProfile app={IoLogoLinkedin} profile='Andres Florez' url='https://www.linkedin.com/in/andres-florez-2031121bb/' />
          <AppProfile app={IoLogoTwitter} profile='@andresflorezdev' url='https://twitter.com/andresflorezdev' />
        </SimpleGrid>
        <Box textAlign='center' mt={10}>
          <NextLink href='/works'>
            <Button
              variant='solid'
              size='lg'
              colorScheme='orange'
              rightIcon={<Icon as={IoArrowRedoCircleSharp} />}
            >
              Works
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Box>
  )
}
