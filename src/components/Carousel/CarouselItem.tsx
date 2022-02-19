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
            backgroundImage={`url(${img})`}
            width="inherit"
            h="inherit"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            position="relative"
            zIndex="0"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              zIndex="0"
              bg="rgba(51, 51, 51, 0.35)"
              cursor="pointer"
            >
              <VStack
                color="#fff"
                alignItems="center"
                justify="center"
                h="100%"
                fontWeight={700}
                position="relative"
                zIndex="1"
              >
                <Heading
                  my="auto"
                  textAlign="center"
                  fontSize={['24px', '24px', '36px']}
                  color="gray.50"
                >
                  {title}
                  <Text fontSize={['14px', '14px', '24px']} color="gray.100">
                    {subtitle}
                  </Text>
                </Heading>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Link>
    </Flex>
  )
}
