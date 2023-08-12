import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import ImageScreen from './src/screens/ImageScreen';
import FullScreenImg from './src/screens/FullScreenImg';
import SearchScreen from './src/screens/SearchScreen'; 
import Toast from 'react-native-toast-message'; 

const App = () => {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}} 
        /> 
        <stack.Screen
          name="ImageScreen" 
          component={ImageScreen}
          options={{headerShown: false}}
        /> 
        <stack.Screen
          name="FullScreenImg" 
          component={FullScreenImg}
          options={{headerShown: false}}
        /> 
        <stack.Screen
          name="SearchScreen" 
          component={SearchScreen} 
          options={{headerShown: false}}
        />
      </stack.Navigator> 

      <Toast /> 
    </NavigationContainer> 
  );
};

export default App;

const styles = StyleSheet.create({});
