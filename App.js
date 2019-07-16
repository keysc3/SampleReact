/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/components/Login';
import Home from './src/components/Home';
import Dashboard from './src/components/Dashboard';
import Register from './src/components/Register';


const AppNavigator = createStackNavigator({
  home: Home,
  login: Login,
  register: Register,
  dash: Dashboard,
});

export default createAppContainer(AppNavigator);
