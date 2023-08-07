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

export default function App(){
  return(
      <NavigationContainer>
        <StatusBar backgroundColor={"#F0F4FF"}/>
        <Routes/>
      </NavigationContainer>
    )
}