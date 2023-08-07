import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import styled from 'styled-components/native'
import { Container, Titulo, Nome, BotaoSujeito, BotaoText } from './src/styles';


export default function App(){
  return(
    <Container>
      <Titulo>Castello</Titulo>
      <Nome>Fala Castello</Nome>

      <BotaoSujeito onPress={() => alert('a')}>
        <BotaoText>A</BotaoText>
      </BotaoSujeito>
    </Container>
  )
}