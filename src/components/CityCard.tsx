import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

interface CityCardProps {
  image: string
  name: string
  country: string
  flag: string
}

export function CityCard({ image, name, country, flag }: CityCardProps) {
  return (
    <Box w="16rem">
      <VStack h="100%" spacing="0">
        <Image w="100%" h="62%" src={image} alt={name} objectFit="cover" />
        <HStack
          bg="#fff"
          w="100%"
          px="1rem"
          justify="space-between"
          align="center"
          border="solid 1px "
          borderColor="orange.700"
          borderTop="none"
          h="38%"
          mt="2rem"
        >
          <Box>
            <Heading fontSize="20px" fontWeight={600}>
              {name}
            </Heading>
            <Text>{country}</Text>
          </Box>
          <Image borderRadius="full" boxSize="30px" src={flag} alt={country} />
        </HStack>
      </VStack>
    </Box>
  )
}
