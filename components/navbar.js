import NextLink from 'next/link'
import { 
  Box,
  useColorModeValue,
  useColorMode,
  Button,
  Link
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
      <NextLink href='/'>
        <Link>Home</Link>
      </NextLink>
      <NextLink href='/works'>
        <Link>Works</Link>
      </NextLink>
      <Button onClick={toggleColorMode}>
        Theme { colorMode === 'light' ? 'dark': 'light' }
      </Button>
    </Box>
  )
}
