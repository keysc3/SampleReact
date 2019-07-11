/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

class App extends Component {
    render () {
        return (
        <View style={styles.container}>
          <Text style={styles.textAtt}>My App Component</Text>
          <Button onPress={() => this.props.navigation.navigate('test')} title="Go to Test"></Button>
        </View>
        );
    }
}

class Test extends Component {
  render () {
      return (
      <View style={styles.container}>
        <Text style={styles.textAtt}>My Test Component</Text>
        <Button onPress={() => this.props.navigation.navigate('home')} title="Go to App"></Button>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#841584'
  },
  textAtt: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

const AppNavigator = createStackNavigator({
  home: App,
  test: Test
});

export default createAppContainer(AppNavigator);
