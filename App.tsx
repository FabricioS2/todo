import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './componentes/home';
import CriarTarefa from './componentes/criarTarefa';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mudardados from './componentes/mudardados';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
     <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="CriarTarefa" component={CriarTarefa} options={{ headerShown: false }}/>
        <Stack.Screen name="Mudardados" component={Mudardados} options={{ headerShown: false }}/>
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
