import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

interface CarouselItemProps {
  img: string
  title: string
  subtitle: string
  to: string
}

export function CarouselItem({ img, title, subtitle, to }: CarouselItemProps) {
  return (
    <Flex align="center" justify="center" h="100%" w="100%" textAlign="center">
      <Link href={to}>
        <Box as="a" h="inherit" w="inherit">
          <Box
            as="button"
            backgroundImage={`url(${img})`}
            width="inherit"
            h="inherit"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          >
            <VStack
              color="#fff"
              alignItems="center"
              justify="center"
              h="100%"
              fontWeight={700}
            >
              <Heading
                my="auto"
                textAlign="center"
                fontSize="36px"
                color="gray.50"
              >
                {title}
                <Text fontSize="24px" color="gray.100">
                  {subtitle}
                </Text>
              </Heading>
            </VStack>
          </Box>
        </Box>
      </Link>
    </Flex>
  )
}
