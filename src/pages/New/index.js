import React, { useState } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import RegisterTypes from '../../components/RegisterTypes';
import { Background, Input, SubmitButton, SubmitText } from './styles';
import Header from '../../components/Header'

export default function New(){

  const [labelInput, setLabelInput] = useState('')
  const [valueInput, setValueInput] = useState('')
  const [type, setType] = useState('receita')
  const navigation = useNavigation()

  function handleSubmit(){
    Keyboard.dismiss();
    if(isNaN(parseFloat(valueInput) || labelInput == '' || type === null)){
      Alert('Preencha todos os campos')
      return
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd(){
    Keyboard.dismiss()

    await api.post('./receive', {
      description: labelInput,
      value: Number(valueInput),
      type: type,
      date: format(new Date(), 'dd/mm/yyyy')
    })

    setLabelInput('')
    setValueInput('')
    navigation.navigate('Home')
  }

  return(
    
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
      <Background>

        <Header title="Registrar" />
        <SafeAreaView style={{marginTop: 14, alignItems: 'center' }}>
          
          <Input value={labelInput} onChangeText={text => setLabelInput(text)} placeholder="Descrição do registro"/>
          <Input value={valueInput} onChangeText={text => setValueInput(text)} placeholder="Valor" keyboardType="numeric"/>
          <RegisterTypes type={type} sendTypeChanged={item => setType(item)}/>

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>

      </Background>
    </TouchableWithoutFeedback>
  )
}