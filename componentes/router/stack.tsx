import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { createNativeStackNavigator,NativeStackNavigationProp} from '@react-navigation/native-stack';
import Home from "../home"
import CriarTarefa from "../criarTarefa"
import TaskProvider from '../context/TaskContext';



type RootStackParamList = {
  Home: undefined;
  CriarTarefa: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();


export default function Stackomponente() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <RootStack.Screen name="CriarTarefa" component={CriarTarefa} options={{ headerShown: false }} />
        </RootStack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}