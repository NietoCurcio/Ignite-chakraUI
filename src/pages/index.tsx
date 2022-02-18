import type { NextPage } from 'next'
import { ChakraProvider, Text } from '@chakra-ui/react'
import theme from '../styles/theme'

const Home: NextPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Text fontWeight={400}>Hello world</Text>
      <Text fontWeight={500}>Hello world2</Text>
      <Text fontWeight={700}>Hello world3</Text>
    </ChakraProvider>
  )
}

export default Home
