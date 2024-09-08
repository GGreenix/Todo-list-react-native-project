import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}