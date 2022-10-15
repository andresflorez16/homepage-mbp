import { Text, Box, useColorModeValue } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box bg={useColorModeValue('hardTeal', 'smoothWhite')}>
      <Text textAlign='center' fontSize={12} color='#222222' p={2}>
        &copy; {new Date().getFullYear().toString()} Andrés Florez. All Rights Reserved.
      </Text>
    </Box>
  )
}
