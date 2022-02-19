import type { NextPage } from 'next'
import { Text, useBreakpointValue, Box } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Showcase } from '../components/Showcase'
import { Categories } from '../components/Categories'
import { CustomDivider } from '../components/CustomDivider'
import { Carousel } from '../components/Carousel'
import { GetStaticProps } from 'next'
interface ContinentsObject {
  slug: string
  description: string
  continentName: string
  imageUrl: string
}

interface HomeProps {
  carouselData: ContinentsObject[]
}

const Home = ({ carouselData }: HomeProps) => {
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

      <Box mx={['0px', '0px', '100px']}>
        <Carousel carouselData={carouselData} />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(`http://localhost:5000/continents`)
  const data = (await response.json()).map((cont: ContinentsObject) => ({
    slug: cont.slug,
    description: cont.description,
    continentName: cont.continentName,
    imageUrl: cont.imageUrl,
  }))

  return {
    props: {
      carouselData: data,
    },
  }
}

export default Home
