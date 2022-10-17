import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwarProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

export const Section = ({ children, delay = 0, w, p, ...props }) => {
  return (
    <StyledDiv
      w={w}
      p={p}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
      {...props}
    >
      {children}
    </StyledDiv>
  )
}
