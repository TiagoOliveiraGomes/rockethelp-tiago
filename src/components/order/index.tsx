import { Box, Circle, HStack, Pressable, Text, useTheme, VStack, IPressableProps } from 'native-base'
import { CircleWavyCheck, ClockAfternoon, Hourglass } from 'phosphor-react-native'
import React from 'react'

export type OrderProps = IPressableProps & {
    id:string,
    patrimony: string,
    when: string,
    status: 'open' | 'closed'
}

export function Order(props: OrderProps) {
    const { id, patrimony, when, status, ...rest} = props

    const { colors} = useTheme()
    const statusColor = status === 'open' ? colors.secondary[700] : colors.green[300]
  return (
    <Pressable {...rest}>
      <HStack
      bg="gray.600"
      mb={4}
      alignItems="center"
      justifyContent="space-between"
      rounded="sm"
      overflow="hidden"
      >
        <Box h="full" w={2} bg={statusColor} />

        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">
              Patrimônio {patrimony}
          </Text>

          <HStack>
            <ClockAfternoon size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" ml={1}>
              {when}
            </Text>
          </HStack>
        </VStack>

        <Circle bg="gray.500" h={12} w={12} mr={5}>
          {status==="closed"
          ? <CircleWavyCheck size={24} color={statusColor} />
          : <Hourglass size={24} color={statusColor} />
          }
        </Circle>
      </HStack>

    </Pressable>
  )
}