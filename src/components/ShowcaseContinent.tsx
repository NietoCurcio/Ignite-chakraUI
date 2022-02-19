import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

interface ShowcaseContinentProps {
  continentName: string
}

export function ShowcaseContinent({ continentName }: ShowcaseContinentProps) {
  return (
    <Box
      height={['150px', '150px', '500px']}
      backgroundImage="url('/images/continents/europe.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        align={['center', 'center', 'flex-end']}
        justify={['center', 'center', 'start']}
        height="100%"
      >
        <Heading
          fontWeight={600}
          fontSize={['28px', '28px', '48px']}
          color="gray.50"
          ml={['0px', '0px', '140px']}
          mb={['0px', '0px', '60px']}
        >
          {continentName}
        </Heading>
      </Flex>
    </Box>
  )
}
