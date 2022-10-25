import NextLink from 'next/link'
import { Box, Heading, Text, Divider, Button } from '@chakra-ui/react'
import { Section } from '../components/section'
import { Scene } from '../components/voxel'

const NotFound = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDir='column'
      minH='100vh'
      w={{ base: 'full', md: '70%' }}
    >
      <Scene />
      <Section
        delay={0.3}
      >
        <Heading textAlign='left'>Not Found</Heading>
        <Text>The page you're looking for was not found</Text>
        <Divider my={3} />
        <NextLink href='/'>
          <Button colorScheme='orange'>Back Home</Button>
        </NextLink>
      </Section>
    </Box>
  )
}

export default NotFound
