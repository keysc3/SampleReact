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
import Dashboard from './src/components/Dashboard/';


const AppNavigator = createStackNavigator({
  home: Home,
  login: Login,
  dash: Dashboard,
});

export default createAppContainer(AppNavigator);
