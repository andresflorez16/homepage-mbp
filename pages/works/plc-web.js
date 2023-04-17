import {
  Box,
  Heading,
  Text,
  Image,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Section } from '../../components/section'
import { Meta } from '../../components/work-view'

const PlcWeb = () => {
  return (
    <Layout title='PLC Web'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        minH='100vh'
        py={5}
        mt={10}
      >
        <Section delay={0.3}>
          <Heading variant='_title' textAlign='center'>PLC Web</Heading>
          <Box
            m='0 auto'
            w={{ base: '90%', md: '50%' }}
          >
            <Image
              src='/thumbnail/plc.png'
              alt='plc-web'
              w='100%'
              placeholder='blur'
              my={5}
              borderRadius={14}
              boxShadow='2xl'
            />
            <Text textAlign='justify'>
              PLC Web was implemented at La Salle University to monitor and analyze the data of PLC 1200 Allan Bradley, simulating an automation stations.
            </Text>
            <List>
              <ListItem my={5}>
                <Meta>Stack</Meta>
                <span>HTML, CSS, JavaScript, Python, Firebase</span>
              </ListItem>
            </List>
          </Box>
        </Section>
      </Box>
    </Layout>
  )
}

export default PlcWeb
