import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

class Register extends Component {
    render () {
        return (
        <View style = {styles.mainContainer}>
            <View style = {styles.innerContainer}>
                <View style = {{alignSelf: 'center', paddingTop: 10}}>
                            <Image
                            style={{width: 80, height: 80}}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                </View>
                <ProgressSteps activeStepNumColor = 'white' progressBarColor = '#dff3fd' disabledStepIconColor = '#dff3fd'>
                    <ProgressStep label = "Account">
                        <View>
                            <TextInput  style = {styles.input}
                                autoCorrect = {false}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                placeholder = "Email Address"
                                placeholderTextColor = "#6c9192"/>
                            <TextInput  style = {styles.input}
                                autoCorrect = {false}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                placeholder = "Password"
                                placeholderTextColor = "#6c9192"/>
                            <TextInput  style = {styles.input}
                                autoCorrect = {false}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                placeholder = "Confirm Password"
                                placeholderTextColor = "#6c9192"/>
                        </View>
                    </ProgressStep>
                    <ProgressStep label = "Personal">
                        <View>
                        <TextInput  style = {styles.input}
                                autoCorrect = {false}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                placeholder = "First Name"
                                placeholderTextColor = "#6c9192"/>
                            <TextInput  style = {styles.input}
                                autoCorrect = {false}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                placeholder = "Last Name"
                                placeholderTextColor = "#6c9192"/>
                            <TextInput  style = {styles.input}
                                autoCorrect = {false}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                placeholder = "Phone Number"
                                placeholderTextColor = "#6c9192"/>
                        </View>
                    </ProgressStep>
                    <ProgressStep label = "Location">
                        <View>
                        <TextInput  style = {styles.input}
                                autoCorrect = {false}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                placeholder = "Country"
                                placeholderTextColor = "#6c9192"/>
                            <TextInput  style = {styles.input}
                                autoCorrect = {false}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                placeholder = "Province/State"
                                placeholderTextColor = "#6c9192"/>
                            <TextInput  style = {styles.input}
                                autoCorrect = {false}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                placeholder = "City"
                                placeholderTextColor = "#6c9192"/>
                            <TextInput  style = {styles.input}
                            autoCorrect = {false}
                            underlineColorAndroid = "rgba(0, 0, 0, 0)"
                            placeholder = "Postal Code/Zip"
                            placeholderTextColor = "#6c9192"/>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#021f4b'
    },
    input: {
        flex: 1,
        backgroundColor: '#03396a',
        margin: 5,
        height: 50,
        borderColor: '#dff3fd',
        borderWidth: 1,
        borderRadius: 10,
        color: 'white',
        fontSize: 16
    },
    innerContainer: {
        flex: 4, 
        backgroundColor: '#021f4b'
    }
});

export default Register;