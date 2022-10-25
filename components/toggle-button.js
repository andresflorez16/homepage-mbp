import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const ToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          marginLeft={15}
          colorScheme={useColorModeValue('purple', 'yellow')}
          onClick={toggleColorMode}
          aria-label='toggle button theme'
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        />
      </motion.div>
    </AnimatePresence>
  )
}
