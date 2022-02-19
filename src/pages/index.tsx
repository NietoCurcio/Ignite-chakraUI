import type { NextPage } from 'next'
import {
  Text,
  useBreakpointValue,
  useMediaQuery,
  Divider,
  Box,
  Image,
} from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Showcase } from '../components/Showcase'
import { Categories } from '../components/Categories'
import { CustomDivider } from '../components/CustomDivider'
import { Carousel } from '../components/Carousel'

const Home: NextPage = () => {
  const isSmall = useBreakpointValue({ base: true, lg: false })

  // in order to make useBreakpointValue works with Next.js,
  // I've had to downgrade chakra-ui to 1.7.3
  // https://github.com/chakra-ui/chakra-ui/issues/5506

  return (
    <>
      <Header isHome={true} />
      <Showcase isSmall={isSmall} />
      <Categories isSmall={isSmall} />

      <CustomDivider />

      <Text
        fontWeight={500}
        textAlign="center"
        mx="auto"
        my={['6', '6', '12']}
        fontSize={['20px', '20px', '36px']}
      >
        Vamos nessa?<Text>Então escolha seu continente</Text>
      </Text>

      <Box mx="100px">
        <Carousel />
      </Box>
    </>
  )
}

export default Home
