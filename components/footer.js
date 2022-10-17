import { Text, Box } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box 
      position='absolute'
      bottom={0}
      bg='transparent'
      w='100%'
      m='0 auto'
      mb={5}
    >
      <Text
        textAlign='center'
        fontSize={14}
        color='#444'
        p={2}
      >
        &copy; {new Date().getFullYear().toString()} Andrés Florez. All Rights Reserved.
      </Text>
    </Box>
  )
}
