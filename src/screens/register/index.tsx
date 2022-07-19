import { VStack } from 'native-base'
import React from 'react'

import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Button } from '../../components/button'

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600" >
        <Header title='Nova solicitação' />

        <Input 
        placeholder='Número do patrimonio'
        mt={4}
        />

        <Input 
        placeholder='Descrição do problema'
        mt={5}
        flex={1}
        multiline
        textAlignVertical='top'
        />

        <Button 
        title="Cadastrar"
        mt={5}
        />
    </VStack>
  )
}