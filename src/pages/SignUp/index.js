import React, {useContext, useState} from 'react';
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
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function SignUp(){

  const navigation = useNavigation()
  const { user, signUp } = useContext(AuthContext)
  const [nome, setNome] = useState('') 
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 

  function handleSignUp(){
    signUp(nome, email, password)
  }

  return(
    <Background>
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
    >
      <AreaInput>
        <Input
          placeholder="Seu Nome"
          value={nome}
          onChangeText={text => setNome(text)}
        />
      </AreaInput>
      <AreaInput>
        <Input
          placeholder="Seu Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </AreaInput>
      <AreaInput>
        <Input
          placeholder="Sua Senha"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </AreaInput>
      <SubmitButton activeOpacity={0.8} onPress={handleSignUp}>
        <SubmitText>Cadastrar</SubmitText>
      </SubmitButton>
      <Link onPress={() => navigation.navigate('SignIn')}>
        <LinkText>Já tenho uma Conta</LinkText>
      </Link>
    </Container>
  </Background>
    )
}