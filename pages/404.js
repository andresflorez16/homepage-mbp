import NextLink from 'next/link'
import { Box, Heading, Text, Divider, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Section } from '../components/section'
import { Scene } from '../components/voxel'

const NotFound = () => {
  return (
    <Layout title='404'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDir='column'
        minH='100vh'
        m='0 auto'
        w={{ base: 'full', md: '70%' }}
      >
        <Section
          delay={0.3}
        >
          <Scene />
          <Heading textAlign='left'>Not Found</Heading>
          <Text>The page you&apos;re looking for was not found</Text>
          <Divider my={3} />
          <NextLink href='/'>
            <Button colorScheme='orange'>Back Home</Button>
          </NextLink>
        </Section>
      </Box>
    </Layout>
  )
}

export default NotFound
