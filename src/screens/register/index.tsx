import { VStack } from 'native-base'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'

import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Alert } from 'react-native'

export function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [patrimony, setPatrimony] = useState('')
  const [description, setDescription] = useState('')

  const navigation = useNavigation()

  function handleNewOrderRegister() {
    if(!patrimony || !description){
      Alert.alert("Registrar", "Preencha todos os campos.")
    }
    
    setIsLoading(true)

    firestore()
    .collection('orders')
    .add({
      patrimony,
      description,
      status: 'open',
      created_at: firestore.FieldValue.serverTimestamp()
    })
    .then(()=> {
      Alert.alert('solicitação', 'Solicitação registrada com sucesso.')
      navigation.goBack()
    })
    .catch(error => {
      console.log(error)
      setIsLoading(false)
      return Alert.alert('Solicitação', 'Não foi possível registrar o pedido.')
    })
  }
  return (
    <VStack flex={1} p={6} bg="gray.600" >
        <Header title='Solicitação' />

        <Input 
        placeholder='Número do patrimonio'
        mt={4}
        onChangeText={setPatrimony}
        />

        <Input 
        placeholder='Descrição do problema'
        mt={5}
        flex={1}
        multiline
        textAlignVertical='top'
        onChangeText={setDescription}
        />

        <Button 
        title="Cadastrar"
        mt={5}
        isLoading={isLoading}
        onPress={handleNewOrderRegister}
        />
    </VStack>
  )
}