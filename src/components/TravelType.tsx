import {
  HStack,
  Image,
  Stack,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { CircleIcon } from './CircleIcon'

interface TravelTypeProps extends StackProps {
  image: string
  name: string
  isSmall?: boolean
}

export function TravelType({ image, name, isSmall, ...rest }: TravelTypeProps) {
  return (
    <Stack
      align="center"
      direction={isSmall ? 'row' : 'column'}
      p="2"
      {...rest}
    >
      {!isSmall ? (
        <Image w="85px" src={image} alt={name} />
      ) : (
        <CircleIcon w="8px" color="orange.700" />
      )}
      <Text>{name}</Text>
    </Stack>
  )
}
