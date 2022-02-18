import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

interface ShowcaseProps {
  isSmall?: boolean
}

export function Showcase({ isSmall }: ShowcaseProps) {
  return (
    <Box
      height={['163px', '163px', '335px']}
      backgroundImage="url('/images/home.jpg')"
      backgroundPosition="50% 25%"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex align="center" justify="space-around" height="100%">
        <Box>
          <Stack spacing={['4', '4', '6']}>
            <Heading
              fontWeight={500}
              fontSize={['20px', '20px', '36px']}
              color="gray.50"
              w={['15rem', '15rem', '27rem']}
            >
              5 Continentes, <Text>infinitas possibilidades.</Text>
            </Heading>
            <Text
              fontWeight={400}
              fontSize={['14px', '14px', '20px']}
              color="gray.100"
              w={['21rem', '21rem', '33rem']}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
            </Text>
          </Stack>
        </Box>
        {!isSmall && (
          <Box>
            <Image
              position="relative"
              top="50px"
              src="/images/Airplane.svg"
              transform="rotate(3deg)"
              alt="Airplane"
            />
          </Box>
        )}
      </Flex>
    </Box>
  )
}
