import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#CCF2F4', '#222')(props),
    }
  })
}

const components = {
  Heading: {
    variants: {
      '_title': {
        fontSize: 30,
        fontWeight: 'bold'
      }
    }
  },
  Text: {
    variants: {
      '_section': {
        fontSize:  20,
        fontWeight: 'bold',
        fontFamily: 'Jetbrains Mono'
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#9ED2C6', '#54BAB9')(props)
    })
  }
}

const fonts = {
  heading: "'Jetbrains Mono'",
}

const colors = {
  smoothTeal: '#9ED2C6'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
