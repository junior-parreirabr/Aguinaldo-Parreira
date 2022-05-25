import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//IMPORT DE TELAS
import Home from './paginas/Home.js';
import Home_MA from './paginas/Home_MA.js';
import Mediçao from './paginas/Mediçao.js';
import Historico from './paginas/Historico.js';
import Notificaçoes from './paginas/Notificaçoes.js';
import Login from './paginas/Login.js';
import Cadastro from './paginas/Cadastro.js';
import Menu from './paginas/Menu.js';
import Cadastro_nadador from './paginas/Cadastro_nadador.js';
import Cronometro from './paginas/Cronometro.js';
import Estatistica_piscina from './paginas/Estatistitica_piscina.js';
import Estatistica_piscina_2 from './paginas/Estatistica_piscina_2.js';
import Estatistica_nadador from './paginas/Estatistica_nadador.js';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Mediçao"
    activeColor='#FFFAE4'
    labelStyle={{ fontSize: 12 }}
    style={{ backgroundColor: 'black' }}
    barStyle={{ backgroundColor: '#63A46C' }}
    activeColor="#f0edf6"
    inactiveColor="black"
  >

      <Tab.Screen
        name="Notificaçoes"
        component={Notificaçoes}
        options={{
          tabBarLabel: '',
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />


      <Tab.Screen
        name="Mediçao"
        component={Mediçao}
        options={{
          tabBarLabel: '',
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Historico"
        component={Historico}
        options={{
          tabBarLabel: '',
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clock" color={color} size={26} />
          ),
        }}
      />

  </Tab.Navigator>
  );
}


export default function App() {
  return (
  <NavigationContainer>


    <Stack.Navigator>
      <Stack.Screen name="Home_MA" component={Home_MA} options={{ headerShown: false }}  />
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }}/>
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
