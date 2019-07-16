import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class Jobs extends Component {

  render() {
    return (
        <View style={styles.mainContainer}>
            <View style = {styles.middle}>
                <Text style={styles.label}>middle</Text>
            </View>   
        </View>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
  },

  middle: {
      flex: 8,
  },

  bottom: {
      flex: 1,
      backgroundColor: "#E8E8E8",

  },
  topnav: {
      paddingTop: 8,
      flexDirection: "row",
      justifyContent: "space-evenly",
      paddingBottom: 0,
      
  },
  bottomnav: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: 10,
      
      
  },
  iconsize: {
      height: 30,
      width: 30,
  },
  dividerline: {
      borderBottomColor: 'black',
      borderBottomWidth: 1, 
  },

});

export default Jobs;
