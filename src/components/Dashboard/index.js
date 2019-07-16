import React, { Component } from 'react';
import { View, Text, Container, StyleSheet, Image, Button, TouchableOpacity, TouchableHighlight, } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Jobs from './jobs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


class Dashboard extends Component {
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


const TabNavigator = createBottomTabNavigator({
    Home: Dashboard,
    Jobs: Jobs,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = FontAwesome5;
          let iconName;
          if (routeName === 'Home') {
            iconName = `bell`;
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.
            //IconComponent = IconWithBadge; 
          } else if (routeName === 'Jobs') {
            iconName = `search`;
          }
          //user-friends, cog
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      justifyContent: "space-evenly",
    
    style: {
        backgroundColor: '#E8E8E8',
        paddingBottom: 0,
        
      },
    },
  
}
  );

export default createAppContainer(TabNavigator);

