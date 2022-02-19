import { Text } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { Header } from '../components/Header'

export default function Continent({ data }: any) {
  return (
    <>
      <Header isHome={false} />
      <Text fontWeight={400}>Hello world</Text>
      <Text fontWeight={500}>Hello world2</Text>
      <Text fontWeight={700}>Hello world3</Text>
      <h1>{data.continentName}</h1>
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
  console.log(data)
  return {
    props: {
      data,
    },
  }
}
