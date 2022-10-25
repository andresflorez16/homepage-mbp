import { useRouter } from 'next/router'
import { Box, Heading, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Section } from '../../components/section'

const Work = () => {
  const { query } = useRouter()

  return (
    <Layout title={query.id}>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minH='100vh'
        w={{ base: 'full', md: '70%' }}
      >
        <Section delay={0.3}>
          <Heading>Work</Heading>
        </Section>
      </Box>
    </Layout>
  )
}

export default Work
