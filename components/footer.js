import { Text, Box, useColorModeValue } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box 
      //bg={useColorModeValue('hardTeal', 'smoothWhite')}
      position='absolute'
      bottom={0}
      bg='transparent'
      w='100%'
      m='0 auto'
    >
      <Text
        textAlign='center'
        fontSize={12}
        //color='#222222'
        color='#555'
        p={2}
      >
        &copy; {new Date().getFullYear().toString()} Andrés Florez. All Rights Reserved.
      </Text>
    </Box>
  )
}
