import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, ImageBackground, Image, SafeAreaView, TextInput} from 'react-native';
import { Linking } from 'react-native';

const LoginView = () => {

    const [username, inputUserName] = useState('');
    const [password, inputPassword] = useState('');

    return (
        <ImageBackground source={require('../images/wood.jpg')} style={styles.outer} >
            <View style={styles.container} >
                <Text style={styles.main} >PR</Text>
                <View style={styles.inputs} >
                    <TextInput placeholderTextColor={"#c9c9c9"}  style={styles.userText} placeholder={'Username'} onChangeText={(value) => inputUserName} />
                </View>
                <View style={styles.inputs} >
                    <TextInput secureTextEntry={true} placeholderTextColor={"#a2a2a2"}  style={styles.userText} placeholder={'Password'} onChangeText={(value) => inputPassword} />
                </View>
                <Text style={styles.help} onPress={() => Linking.openURL('http://google.com')} >Having trouble? Click here</Text>
                <View style={styles.bottom} >
                    <Text style={[styles.help, styles.moveToSignup]}>Don't have an account? Sign up here</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    inputs: {
        width: '80%',
        marginVertical: 10,
        padding: 12,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: 'rgba(255,145,0,0.52)',
        borderRadius: 8,
    },
    outer: {
        width: '100%',
        height: '100%',
        opacity: 0.85,
    },
    userText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    main: {
        fontSize: 120,
        borderWidth: 1,
        borderColor: '#eff4ff',
        paddingHorizontal: 24,
        color: '#efefff',
        marginTop: '35%',
        marginBottom: 21,
    },
    help: {
        fontSize: 16,
        color: '#9a9a9a'
    },

    bottom: {
        opacity: 0.9,
        marginTop: 345,
    },
    moveToSignup: {
        textShadowColor: '#000',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
        fontWeight: 'bold',
    },
})


export default LoginView;
