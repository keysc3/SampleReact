import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

class Register extends Component {
    render () {
        return (
        // Main Container
        <View style = {styles.mainContainer}>
            {/* Inner Container */}
            <View style = {styles.innerContainer}>
                {/* Logo and Page Title View */}
                <View style = {{alignItems: 'center', paddingTop: 10}}>
                    <Image
                    style={{width: 80, height: 80}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    <Text style = {styles.regText}>Register</Text>
                </View>
                {/* Register Steps */}
                <ProgressSteps activeStepNumColor = 'white' progressBarColor = '#dff3fd' disabledStepIconColor = '#dff3fd' disabledStepNumColor = '#6c9192'>
                    {/* First Register Step: Account Info */}
                    <ProgressStep label = "Account" nextBtnStyle = {styles.nextButton} 
                    nextBtnTextStyle = {styles.nextButtonText}>
                        <View style = {{margin: 40}}>
                            <TextInput  style = {styles.input}
                                autoCorrect = {false}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                placeholder = "Email Address"
                                placeholderTextColor = "#6c9192"/>
                            <TextInput  style = {styles.input}
                                autoCorrect = {false}
                                secureTextEntry = {true}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                placeholder = "Password"
                                placeholderTextColor = "#6c9192"/>
                            <TextInput  style = {styles.input}
                                autoCorrect = {false}
                                secureTextEntry = {true}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                placeholder = "Confirm Password"
                                placeholderTextColor = "#6c9192"/>
                        </View>
                    </ProgressStep>
                    {/* Second Register Step: Personal Info */}
                    <ProgressStep label = "Personal" nextBtnStyle = {styles.nextButton} 
                    nextBtnTextStyle = {styles.nextButtonText} previousBtnTextStyle = {styles.previousButtonText}>
                        <View style = {{margin: 40}}>
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
                    {/* Third Register Step: Location Info */}
                    <ProgressStep label = "Location" nextBtnStyle = {styles.nextButton} 
                    nextBtnTextStyle = {styles.nextButtonText} previousBtnTextStyle = {styles.previousButtonText} onSubmit = {() => this.props.navigation.navigate('dash')}>
                        <View style = {{margin: 40}}>
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

// Styles
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
        backgroundColor: '#021f4b',
    },
    regText: {
        margin: 10,
        fontSize: 26,
        color: '#ffffff'
    },
    nextButton: {
        backgroundColor: '#1c97f4',
        borderRadius: 5,
        width: 100,
        height: 40,
    },
    nextButtonText: {
        alignSelf: 'center',
        color: '#dff3fd'
    },
    previousButtonText: {
        color: '#1c97f4'
    }
});

export default Register;