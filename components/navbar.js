import { 
  Box,
  useColorModeValue,
  useColorMode,
  Text,
  Button
} from '@chakra-ui/react'

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      w='100%'
      p={5}
      position='fixed'
      top='0'
      bg={useColorModeValue('#F4F9F999', '#1119')}
      display='flex'
      justifyContent='space-between'
      zIndex='20'
      css={{ backdropFilter: 'blur(10px)' }}
    >
      <Text variant='_section'>Navbar</Text>
      <Button onClick={toggleColorMode}>
        Theme { colorMode === 'light' ? 'dark': 'light' }
      </Button>
    </Box>
  )
}
