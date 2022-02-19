import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Text, Tooltip, VStack } from '@chakra-ui/react'

interface ContinentDataProps {
  toolTipData: null | string
  quantity: number
  name: string
}

export function ContinentData({
  toolTipData,
  quantity,
  name,
}: ContinentDataProps) {
  return (
    <VStack>
      <Text fontSize={['24px', '24px', '48px']} color="orange.700">
        {quantity}
      </Text>
      <Text fontSize={['18px', '18px', '24px']}>
        {name}
        {toolTipData && (
          <Tooltip label={toolTipData}>
            <InfoOutlineIcon />
          </Tooltip>
        )}
      </Text>
    </VStack>
  )
}
