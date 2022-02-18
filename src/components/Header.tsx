import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

interface HeaderPros {
  isHome: boolean
}

export function Header({ isHome }: HeaderPros) {
  return (
    <Box>
      <Flex
        alignItems="center"
        py={['17px', '17px', '27px']}
        px={['16px', '16px', '140px']}
      >
        {!isHome && (
          <Link href="/">
            <ChakraLink position="relative">
              <ChevronLeftIcon
                as="button"
                display="flex"
                alignItems="center"
                position="absolute"
                top="-5"
                fontSize={['16px', '16px', '32px']}
              />
            </ChakraLink>
          </Link>
        )}
        <Image
          mx="auto"
          src="./Logo.svg"
          width={['81px', '81px', '184px']}
          alt="WorldTrip"
        />
      </Flex>
    </Box>
  )
}
