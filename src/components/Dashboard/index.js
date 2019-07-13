import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';

class Dashboard extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style = {styles.top}>
                    <Text style={styles.label}>Top</Text>
                </View>
                <View style = {styles.middle}>
                    <Text style={styles.label}>middle</Text>
                </View>
                <View style = {styles.bottom}>
                <View style= {styles.dividerline}/>
                    <View style = {styles.topnav}>
                        <View style={styles.bottomnav}>
                        <Image style={styles.iconsize}
                        source={{uri: 'https://img.icons8.com/ios/64/000000/folder-invoices--v2.png'}}/>
                        <Text style={styles.label}>Home</Text>
                        </View>
                        <View style={styles.bottomnav}> 
                        <Image style={styles.iconsize}
                        source={{uri: 'https://img.icons8.com/ios/64/000000/search--v1.png'}}/>
                        <Text style={styles.label}>Jobs</Text>
                        </View>
                        <View style={styles.bottomnav}> 
                        <Image style={styles.iconsize}
                        source={{uri: 'https://img.icons8.com/ios/64/000000/groups.png'}}/>
                        <Text style={styles.label}>Jobs</Text>
                        </View>
                        <View style={styles.bottomnav}> 
                        <Image style={styles.iconsize}
                        source={{uri: 'https://img.icons8.com/ios/64/000000/settings.png'}}/>
                        <Text style={styles.label}>Jobs</Text>
                        </View>
                    </View>
                </View>
            </View>
          
        );
      }
}

    
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    top: {
        flex: 1,
    },
    middle: {
        flex: 7,
    },
    
    bottom: {
       flex: 1,
       
    },
    topnav: {
        paddingTop: 10,
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

export default Dashboard;