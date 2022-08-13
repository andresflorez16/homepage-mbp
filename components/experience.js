import { 
  Box,
  Heading,
  useColorMode
} from '@chakra-ui/react'

export const Experience = () => {
  const { colorMode } = useColorMode()
  return (
    <Box
      bg={colorMode === 'light' ? 'smoothTeal' : '#333'}
      minH='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      color='#fff'
    >
      <Heading>
        Experience
      </Heading>
    </Box>
  )
}
