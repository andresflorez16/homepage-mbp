import { 
  Box,
  Heading,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react'

const AppProfile = ({ path, profile }) => (
  <Box>
    <Image 
      src={`/assets/${path}`}
      w={70}
      alt={profile}
    />
  </Box>
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
      <Heading>On web</Heading>
      <Box
        w={{ base: 'full', md: '70%' }}
        pl={4}
      >
        <Text variant='_section'>@andresflorez.dev</Text>
        <Text variant='_section'>@andresflorezdev</Text>
        <Text variant='_section'>andresflorez16</Text>
      </Box>
    </Box>
  )
}
