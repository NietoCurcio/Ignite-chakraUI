import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    yellow: {
      '900': '#FFBA08',
    },
    gray: {
      '600': '#47585B',
      '50': '#F5F8FA',
      '100': '#DADADA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600',
      },
    },
  },
})

export default theme
