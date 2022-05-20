import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//IMPORT DE TELAS
import Home from './paginas/Home.js';
import Login from './paginas/Login.js';
import Cadastro from './paginas/Cadastro.js';
import Menu from './paginas/Menu.js';
import Cadastro_nadador from './paginas/Cadastro_nadador.js';
import Cronometro from './paginas/Cronometro.js';
import Estatistica_piscina from './paginas/Estatistitica_piscina.js';
import Estatistica_piscina_2 from './paginas/Estatistica_piscina_2.js';
import Estatistica_nadador from './paginas/Estatistica_nadador.js';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
  <NavigationContainer>

    <Stack.Navigator initialRouteName="Home">

      <Stack.Screen 
       name="Home"
       component={Home} 
       {...props => <HomeScreen {...props} extraData={someData} />}
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

      <Stack.Screen
       name="Menu"
       component={Menu}
       options={{ headerShown: false }} 

       />

      <Stack.Screen
       name="Cadastro_nadador"
       component={Cadastro_nadador}
       options={{ headerShown: false }} 

       />
      
      <Stack.Screen
       name="Cronometro"
       component={Cronometro}
       options={{ headerShown: false }} 

       />
      <Stack.Screen
       name="Estatistica_piscina"
       component={Estatistica_piscina}
       options={{ headerShown: false }} 

       />
       <Stack.Screen
       name="Estatistica_piscina_2"
       component={Estatistica_piscina_2}
       options={{ headerShown: false }} 

       />

       <Stack.Screen
       name="Estatistica_nadador"
       component={Estatistica_nadador}
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
