import { 
  Box,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'

export const Posts = () => {

  return (
    <Box
      bg={useColorModeValue('hardTeal', 'smoothWhite')}
      minH='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      color='#000'
    >
      <Heading>
        On web
      </Heading>
    </Box>
  )
}
