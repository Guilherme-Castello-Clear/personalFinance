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

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import AuthProvider from './src/contexts/auth';


export default function App(){
  return(
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor={"#F0F4FF"}/>
          <Routes/>
        </AuthProvider>
      </NavigationContainer>
    )
}