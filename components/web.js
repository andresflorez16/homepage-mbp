import { 
  Box,
  Heading,
  Button,
  useColorModeValue,
  Link,
  Icon
} from '@chakra-ui/react'
import { 
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5'

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
    >
      <Heading>On the web</Heading>
      <Box
        w={{ base: 'full', md: '70%' }}
        pl={4}
      >
        <AppProfile app={IoLogoGithub} profile='andresflorez16' url='https://github.com/andresflorez16' />
        <AppProfile app={IoLogoInstagram} profile='@andresflorez.dev' url='' />
        <AppProfile app={IoLogoLinkedin} profile='Andres Florez' url='' />
        <AppProfile app={IoLogoTwitter} profile='@andresflorez.dev' url='' />
      </Box>
    </Box>
  )
}
