import type { NextPage } from 'next'
import { ChakraProvider, Text } from '@chakra-ui/react'
import theme from '../styles/theme'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header isHome={false} />
      <Text fontWeight={400}>Hello world</Text>
      <Text fontWeight={500}>Hello world2</Text>
      <Text fontWeight={700}>Hello world3</Text>
    </>
  )
}

export default Home
