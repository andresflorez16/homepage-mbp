import { 
  Box, 
  Heading, 
  Image, 
  Text,
  List,
  Link,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Section } from '../../components/section'
import Layout from '../../components/layouts/article'
import { Meta } from '../../components/work-view'

const AireCiudadano = () => {
  return (
    <Layout title='Aire Ciudadano'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        minH='100vh'
        py={5}
        mt={20}
      >
        <Section delay={0.3}>
          <Heading variant='_title' textAlign='center'>Aire Ciudadano</Heading>
          <Box 
            m='0 auto'
            w={{ base: '90%', md: '50%' }}
          >
            <Image 
              src='/thumbnail/aireciudadano.png' 
              alt='AireCiudadano'
              w='100%' 
              borderRadius={12}
              placeholder='blur'
              boxShadow='2xl'
              my={5}
            />
            <Text textAlign='justify'>
              Aire Ciudadano is an application for monitoring air quality in Bogotá DC, through the use of low-cost sensors in real-time.
            </Text>
            <List my={3}>
              <ListItem>
                <Meta>Website</Meta>
                <span>
                  <Link href='https://aire-ciudadano.com'>
                    https://aire-ciudadano.com <ExternalLinkIcon mx='2px' mb={1} />
                  </Link>
                </span>
              </ListItem>
              <ListItem>
                <Meta>Stack</Meta> 
                <span>HTML, CSS, JavaScript, NodeJS, ExpressJS, Firebase.</span> 
              </ListItem>
            </List>
            <Image 
              src='/thumbnail/aireciudadano2.png' 
              w='100%' 
              alt='thumbnail'
              borderRadius={12}
              placeholder='blur'
              boxShadow='2xl'
              my={5}
            />
            <Image 
              src='/thumbnail/aireciudadano3.png' 
              w='100%' 
              alt='thumbnail'
              borderRadius={12}
              placeholder='blur'
              boxShadow='2xl'
              my={5}
            />
            <Image 
              src='/thumbnail/aireciudadano4.png' 
              w='100%' 
              alt='thumbnail'
              borderRadius={12}
              placeholder='blur'
              boxShadow='2xl'
              my={5}
            />
          </Box>
        </Section>
      </Box>
    </Layout>
  )
}

export default AireCiudadano
