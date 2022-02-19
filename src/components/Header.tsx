import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Grid,
  Image,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'

interface HeaderPros {
  isHome: boolean
}

export function Header({ isHome }: HeaderPros) {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      py={['17px', '17px', '27px']}
      alignItems="center"
    >
      <Box pl={['16px', '16px', '140px']}>
        {!isHome && (
          <Link href="/">
            <ChakraLink>
              <ChevronLeftIcon
                as="button"
                display="flex"
                alignItems="center"
                fontSize={['16px', '16px', '32px']}
              />
            </ChakraLink>
          </Link>
        )}
      </Box>
      <Box>
        <Image
          mx="auto"
          src="./Logo.svg"
          width={['81px', '81px', '184px']}
          alt="WorldTrip"
        />
      </Box>
      <Box></Box>
    </Grid>
  )
}
