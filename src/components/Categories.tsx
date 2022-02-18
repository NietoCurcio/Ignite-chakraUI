import { Box, Flex, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { TravelType } from './TravelType'

interface CategoriesProps {
  isSmall?: boolean
}

export function Categories({ isSmall }: CategoriesProps) {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      px={['50px', '50px', '140px']}
      py={['36px', '80px']}
      flexWrap="wrap"
      textAlign="center"
      fontSize={['18px', '18px', '24px']}
    >
      <TravelType
        isSmall={isSmall}
        image="/images/cocktail.svg"
        name="vida noturna"
      />
      <TravelType isSmall={isSmall} image="/images/surf.svg" name="praia" />
      <TravelType
        isSmall={isSmall}
        image="/images/building.svg"
        name="moderno"
      />
      <TravelType
        isSmall={isSmall}
        image="/images/museum.svg"
        name="clássico"
      />
      <TravelType
        mx={isSmall ? 'auto' : 'inherit'}
        isSmall={isSmall}
        image="/images/earth.svg"
        name="e mais..."
      />
    </Flex>
  )
}
