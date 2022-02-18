import type { NextPage } from 'next'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header isHome={true} />
      <Box
        height="335px"
        backgroundImage="url('/images/home.jpg')"
        backgroundPosition="50% 25%"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex align="center" justify="space-around">
          <Box>
            <Heading fontWeight={500} fontSize="36px" color="gray.50" w="27rem">
              5 Continentes, <Text>infinitas possibilidades.</Text>
            </Heading>
            <Text fontWeight={400} fontSize="20px" color="gray.100" w="33rem">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
            </Text>
          </Box>
          <Box>
            <Image
              position="relative"
              top="70px"
              src="/images/Airplane.svg"
              transform="rotate(3deg)"
              alt="Airplane"
            />
          </Box>
        </Flex>
      </Box>
      <Text fontWeight={400}>Hello world</Text>
      <Text fontWeight={500}>Hello world2</Text>
      <Text fontWeight={700}>Hello world3</Text>
    </>
  )
}

export default Home
