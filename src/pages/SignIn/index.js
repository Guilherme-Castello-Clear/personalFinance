import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  ActivityIndicator
} from 'react-native';

import { AreaInput, SubmitButton, SubmitText, Link, LinkText, Background, Container, Logo, Input, } from './styles';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function SignIn(){

  const {signIn, loadingAuth} = useContext(AuthContext)
  const navigation = useNavigation();
  const [email, setEmail] = useState('gg@gg.com')
  const [password, setPassword] = useState('123123')
  function handleLogin(){
    if(email == '' || password == '') return
    signIn(email, password)
  }

  return(
      <Background>
        <Container
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          enabled
        >
          <Logo
            source={require('../../assets/Logo.png')}
          />

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
            />
          </AreaInput>
          <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
            {
              loadingAuth ? (
                <ActivityIndicator size={20} color="#FFF"/>
              ) : (
                <SubmitText>Acessar</SubmitText>
              )
            }
          </SubmitButton>
          <Link onPress={() => navigation.navigate('SignUp')}>
            <LinkText>Criar uma Conta</LinkText>
          </Link>
        </Container>
      </Background>
    )
}