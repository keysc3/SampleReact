import React, { Component } from 'react';
import { View, Text, Container, StyleSheet, Image, Button, TouchableOpacity, TouchableHighlight } from 'react-native';




class Dashboard extends Component {
    
    constructor(props) {
        super(props)
        this.state = { uri: 'https://img.icons8.com/ios/64/000000/home.png' }
      }

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
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('dash')}>
                                <Image style={styles.iconsize}
                                source={{uri: 'https://img.icons8.com/wired/64/000000/chat.png'}}/>
                            </TouchableOpacity>
                            <Text style={styles.label}>Home</Text>
                        </View>
                            <View style={styles.bottomnav}> 
                            <TouchableOpacity onPress = {() => this.props.navigation.navigate('dash')}>
                                <Image style={styles.iconsize}
                                source={{uri: 'https://img.icons8.com/wired/64/000000/search.png'}}/>
                            </TouchableOpacity>
                            <Text style={styles.label}>Jobs</Text>
                        </View>
                            <View style={styles.bottomnav}> 
                            <TouchableOpacity onPress = {() => this.props.navigation.navigate('dash')}>
                                <Image style={styles.iconsize}
                                source={{uri: 'https://img.icons8.com/dotty/80/000000/group-foreground-selected.png'}}/>
                            </TouchableOpacity>
                            <Text style={styles.label}>Groups</Text>
                        </View>
                        <View style={styles.bottomnav}> 
                            <TouchableOpacity onPress = {() => this.props.navigation.navigate('dash')}>
                                <Image style={styles.iconsize}
                                source={{uri: 'https://img.icons8.com/wired/64/000000/gear.png'}}/>
                            </TouchableOpacity>
                            <Text style={styles.label}>Settings</Text>
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

export default Dashboard;