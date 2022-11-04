import { 
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import { ToggleButton } from './toggle-button'
import { LinkText } from './links'
import { Logo } from './logo'

export const Navbar = () => {
  return (
    <Box
      w='100%'
      position='fixed'
      top='0'
      zIndex='20'
      bg={useColorModeValue('smoothyTeal', 'hardDark')}
      css={{ backdropFilter: 'blur(10px)' }}
      p={5}
    >
      <Box
        w={{ base: 'full', sm: '90%', md: '60%', xl: '40%' }}
        m='0 auto'
        display='flex'
        justifyContent='space-between'
      >
        <Logo />
        <Box
          display='flex'
          alignItems='center'
          gap={2}
        >
          <LinkText path='/works'>Works</LinkText>
          <ToggleButton />
        </Box>
      </Box>
    </Box>
  )
}
