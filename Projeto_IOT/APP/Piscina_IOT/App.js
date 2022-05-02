import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//IMPORT DE TELAS
import Home from './paginas/Home.js';
import Login from './paginas/Login.js';
import Cadastro from './paginas/Cadastro.js';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
  <NavigationContainer>

    <Stack.Navigator initialRouteName="Home">

      <Stack.Screen 
       name="Home"
       component={Home} 
       options={{ headerShown: false }}

       />

      <Stack.Screen
       name="Login"
       component={Login}
       options={{ headerShown: false }}

       />

      <Stack.Screen
       name="Cadastro"
       component={Cadastro}
       options={{ headerShown: false }} 

       />

    </Stack.Navigator>
    
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
