import { InfoOutlineIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { CityCard } from '../components/CityCard'
import { ContinentData } from '../components/ContinentData'
import { Header } from '../components/Header'
import { ShowcaseContinent } from '../components/ShowcaseContinent'

interface City {
  cityName: string
  country: string
  imageUrl: string
  countryFlagUrl: string
}
interface ContinentProps {
  data: {
    continentName: string
    text: string
    metadata: number[]
    plus100: string
    cities: City[]
    imageUrl: string
  }
}

export default function Continent({ data }: ContinentProps) {
  const isSmall = useBreakpointValue({ base: true, lg: false })

  return (
    <>
      <Header isHome={false} />
      <ShowcaseContinent
        continentName={data.continentName}
        continentImage={data.imageUrl}
      />

      <Flex
        direction={['column', 'column', 'column', 'row']}
        justify="space-around"
        align="center"
        mx="auto"
        py={['1.5rem', '1.5rem', '5rem']}
        px={['1rem', '1rem', 0]}
      >
        <Text
          // maxWidth="600px"
          maxWidth="600px"
          textAlign="justify"
          fontSize={['14px', '14px', '24px']}
        >
          {data.text}
        </Text>
        <Box my={['1rem', '1rem', 0]}>
          <HStack
            justify="space-between"
            w={['88vw', '88vw', '490px']}
            fontWeight={[500, 500, 600]}
          >
            <ContinentData name="países" quantity={50} toolTipData={null} />
            <ContinentData name="línguas" quantity={60} toolTipData={null} />
            <ContinentData
              name="cidades +100"
              quantity={27}
              toolTipData={data.plus100}
            />
          </HStack>
        </Box>
      </Flex>

      <Text fontSize={['24px', '24px', '36px']} ml={['1rem', '1rem', '4rem']}>
        Cidades +100
      </Text>
      <SimpleGrid
        minChildWidth="16rem"
        spacing="11"
        flexWrap="wrap"
        my="2.5rem"
        mx="4rem"
        justifyItems="center"
        spacingY="1.25rem"
      >
        {data.cities.map((city: City, idx: number) => {
          return (
            <CityCard
              key={idx}
              image={city.imageUrl}
              name={city.cityName}
              country={city.country}
              flag={city.countryFlagUrl}
            />
          )
        })}
      </SimpleGrid>
    </>
  )
}

interface ContinentsObject {
  slug: string
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:5000/continents')
  const data = await response.json()
  const paths = data.map((cont: ContinentsObject) => {
    return { params: { slug: cont.slug } }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continent = params?.slug
  const response = await fetch(
    `http://localhost:5000/continents?slug=${continent}`
  )
  const [data] = await response.json()
  return {
    props: {
      data,
    },
  }
}
