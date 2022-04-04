import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Grade8 from './grades/Grade8';
import HomeScreen from './grades/HomeScreen';
import Grade9 from './grades/Grade9';
import Grade10 from './grades/Grade10';
import Grade11 from './grades/Grade11';
import Grade12 from './grades/Grade12';

export default class App extends React.Component 
{
  render()
  {
    return(
       <AppContainer/>
    )
  }
}

const SwitchNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  Grade8:Grade8,
  Grade9:Grade9,
  Grade10:Grade10,
  Grade11:Grade11,
  Grade12:Grade12,

})

const AppContainer=createAppContainer(SwitchNavigator)