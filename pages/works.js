import { Box, Heading } from '@chakra-ui/react'

const Works = () => {
  return (
    <Box
      display='flex'
      minH='100vh'
      justifyContent='center'
      alignItems='center'
      m='0 auto'
      mt={{ base: '10', md: '0' }}
      p={15}
    >
      <Heading>Works!</Heading>
    </Box>
  )
}

export default Works
