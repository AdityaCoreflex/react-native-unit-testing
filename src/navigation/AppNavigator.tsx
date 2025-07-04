import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import UIReferenceScreen from '../screens/Component_Integration';
import APIRefrenceScreen from '../screens/RestAPI_Integration';
import ReduxRefrenceScreen from '../screens/Redux_Integration';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  theme: undefined;
  APIRefrenceScreen: undefined;
  ReduxRefrenceScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="theme" component={UIReferenceScreen} />
        <Stack.Screen name="APIRefrenceScreen" component={APIRefrenceScreen} />
        <Stack.Screen
          name="ReduxRefrenceScreen"
          component={ReduxRefrenceScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
