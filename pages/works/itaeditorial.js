import { 
  Box,
  Heading,
  Link,
  Image,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { ExternalLinkIcon} from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Section } from '../../components/section'
import { Meta } from '../../components/work-view'

const ItaEditorial = () => {
  return (
    <Layout title='ItaEditorial'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        minH='100vh'
        mt={20}
        py={5}
      >
        <Section delay={0.3}>
          <Heading variant='_title' textAlign='center'>ItaEditorial</Heading>
          <Box
            m='0 auto'
            w={{ base: '90%', md: '50%' }}
          >
            <Image
              src='/thumbnail/itabooks.png'
              w='100%'
              alt='ItaEditorial'
              placeholder='blur'
              borderRadius={14}
              my={5}
              boxShadow='2xl'
            />
            <Text textAlign='justify'>
              ITA It is the first startup that allows you to publish your work from anywhere in the world with a few simple steps. Thanks to our web platform and mobile app, fulfilling your dream has never been so easy.
            </Text>
            <List my={3}>
              <ListItem>
                <Meta>WEBSITE</Meta>
                <span>
                  <Link href='https://app.itabooks.com'>
                    https://app.itabooks.com <ExternalLinkIcon mb={1}/>
                  </Link>
                </span>
              </ListItem>
              <ListItem>
                <Meta>Stack</Meta>
                <span>Angular, NodeJS, ExpressJS, Firebase, Ionic</span>
              </ListItem>
              <ListItem>
                <Meta>Platform</Meta>
                <span>iOS, Android, Web</span>
              </ListItem>
            </List>
            <Image 
              src='/thumbnail/itabooks2.png'
              w='100%'
              alt='thumbnail'
              placeholder='blur'
              borderRadius={14}
              boxShadow='2xl'
              my={5}
            />
            <Image 
              src='/thumbnail/itabooks3.png'
              w='100%'
              alt='thumbnail'
              placeholder='blur'
              borderRadius={14}
              boxShadow='2xl'
              my={5}
            />
            <Image 
              src='/thumbnail/itabooks4.png'
              w='100%'
              alt='thumbnail'
              placeholder='blur'
              borderRadius={14}
              boxShadow='2xl'
              my={5}
            />
          </Box>
        </Section>
      </Box>
    </Layout>
  )
}

export default ItaEditorial
