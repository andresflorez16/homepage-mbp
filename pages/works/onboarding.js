import { 
  Box,
  Heading,
  Link,
  Text,
  Image,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Section } from '../../components/section'
import { Meta } from '../../components/work-view'

const Onboarding = () => {
  return (
    <Layout title='Onboarding'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        minH='100vh'
        py={5}
        mt={20}
      >
        <Section delay={0.3}>
          <Heading variant='_title' textAlign='center'>Onboarding Digital BBVA</Heading>
          <Box
            m='0 auto'
            w={{ base: '90%', md: '50%' }}
          >
            <Image
              src='/thumbnail/onboarding.png'
              alt='Onboarding'
              w='100%'
              placeholder='blur'
              borderRadius={14}
              boxShadow='2xl'
              my={5}
            />
            <Text textAlign='justify'>
              This application was implemented to BBVA&apos;s Hackathon with the aim of creating savings and checking accounts, with digital signatures and other information.
            </Text>
            <List>
              <ListItem my={3}>
                <Meta>Stack</Meta>
                <span>NextJS, Styled Components, Firebase</span>
              </ListItem>
            </List>
            <Image 
              src='/thumbnail/onboarding2.png'
              alt='Onboarding'
              w='100%'
              placeholder='blur'
              borderRadius={14}
              boxShadow='2xl'
              my={5}
            />
            <Image 
              src='/thumbnail/onboarding3.png'
              alt='Onboarding'
              w='100%'
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

export default Onboarding
