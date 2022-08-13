import { 
  Box,
  Heading,
  useColorMode
} from '@chakra-ui/react'

export const Bio = () => {
  const { colorMode } = useColorMode()

  return (
    <Box
      bg={colorMode === 'light' ? '#63B7AF' : '#444'}
      minH='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      color='#fff'
    >
      <Heading>
        Bio
      </Heading>
    </Box>
  )
}
