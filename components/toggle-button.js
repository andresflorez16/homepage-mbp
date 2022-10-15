import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const ToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      marginLeft={15}
      colorScheme={useColorModeValue('purple', 'yellow')}
      onClick={toggleColorMode}
      aria-label='toggle button theme'
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
    />
  )
}
