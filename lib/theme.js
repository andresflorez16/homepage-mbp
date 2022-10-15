import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#CCF2F4', '#222')(props),
      fontFamily: "'Jetbrains Mono'" 
    }
  })
}

const components = {
  Heading: {
    variants: {
      '_title': {
        fontSize: 35,
        fontWeight: 'bold',
      }
    }
  },
  Text: {
    variants: {
      '_subtitle': {
        fontSize:  17,
        fontWeight: 'semibold',
        fontFamily: 'Jetbrains Mono',
      },
      '_section_skills': {
        fontSize:  20,
        fontWeight: 'bold',
        fontFamily: 'Jetbrains Mono',
        textDecoration: 'underline',
        textUnderlineOffset: 6,
        textDecorationThickness: 4,
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#63B7AF', '#54BAB9')(props)
    })
  }
}

const fonts = {
  heading: "'Jetbrains Mono'",
}

const colors = {
  smoothTeal: '#9ED2C6',
  smoothWhite: '#EEE',
  hardTeal: '#63B7AF',
  smoothyTeal: '#F4F9F999',
  hardDark: '#2223'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
