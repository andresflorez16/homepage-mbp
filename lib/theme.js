import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#FCF8EC', '#222')(props),
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
      '_section': {
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
    baseStyle: () => ({
      color: '#d65a31',
      fontSize: 17,
      textUnderlineOffset: 6,
      textDecorationColor: '#d65a31',
      textDecorationThickness: 6
    })
  }
}

const fonts = {
  heading: "'Jetbrains Mono'",
}

const colors = {
  light_beige: '#FCF8EC',
  light_blue: '#D0E8F2',
  light_smoothBlue: '#ABD9FF',
  hardBlue: '#456268',
  smoothWhite: '#EEE',
  hardDark: '#2223',
  orange_link: '#d65a31'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
