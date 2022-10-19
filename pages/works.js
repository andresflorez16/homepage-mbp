import { Box, Heading } from '@chakra-ui/react'
import { Section } from '../components/section'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Box
        display='flex'
        minH='100vh'
        justifyContent='center'
        alignItems='center'
        m='0 auto'
        mt={{ base: '10', md: '0' }}
        p={15}
      >
        <Section delay={0.3}>
          <Heading>Works!</Heading>
        </Section>
      </Box>
    </Layout>
  )
}

export default Works
