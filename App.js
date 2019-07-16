/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component,  } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer  } from 'react-navigation';
import { ToolbarAndroid } from 'react-native-gesture-handler';
import Login from './src/components/Login/';
import Home from './src/components/Home';
import Dashboard from './src/components/Dashboard/';
import Jobs from './src/components/Dashboard/jobs.js';
import Register from './src/components/Register';

const AppNavigator = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
    header: null
    }
  },
  login: Login,
  register: Register,
  dash: Dashboard,
  jobs: Jobs,
  },


);

//const AppContainer = createAppContainer(RootStack);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  static navigationOptions = {
    header: null
}
  render() {
    return (
     
    <AppContainer />
    
    );
  }
}