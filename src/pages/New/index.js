import React, { useState } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import RegisterTypes from '../../components/RegisterTypes';
import { Background, Input, SubmitButton, SubmitText } from './styles';
import Header from '../../components/Header'

export default function New(){

  const [labelInput, setLabelInput] = useState('')
  const [valueInput, setValueInput] = useState('')
  const [type, setType] = useState('receita')

  return(
    
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
      <Background>

        <Header title="Registrar" />
        <SafeAreaView style={{marginTop: 14, alignItems: 'center' }}>
          
          <Input value={labelInput} onChangeText={text => setLabelInput(text)} placeholder="Descrição do registro"/>
          <Input value={valueInput} onChangeText={text => setValueInput(text)} placeholder="Valor" keyboardType="numeric"/>
          <RegisterTypes type={type} sendTypeChanged={item => setType(item)}/>

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>

      </Background>
    </TouchableWithoutFeedback>
  )
}