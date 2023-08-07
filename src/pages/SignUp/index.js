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

import { AreaInput, SubmitButton, SubmitText, Link, LinkText, Background, Container, Logo, Input, } from '../SignIn/styles';

import { useNavigation } from '@react-navigation/native';

export default function SignUp(){

  const navigation = useNavigation()

  return(
    <Background>
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
    >
      <AreaInput>
        <Input
          placeholder="Seu Nome"
        />
      </AreaInput>
      <AreaInput>
        <Input
          placeholder="Seu Email"
        />
      </AreaInput>
      <AreaInput>
        <Input
          placeholder="Sua Senha"
        />
      </AreaInput>
      <SubmitButton activeOpacity={0.8}>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>
      <Link onPress={() => navigation.navigate('SignIn')}>
        <LinkText>Já tenho uma Conta</LinkText>
      </Link>
    </Container>
  </Background>
    )
}