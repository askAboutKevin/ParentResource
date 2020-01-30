import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, ImageBackground, Image, SafeAreaView, TextInput, ScrollView, Dimensions} from 'react-native';
import { Linking } from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;

const SignUpPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [school, setSchool] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const role = 'PARENT';

    const checkPasswordMatch = (p) => {
        if (p !== password) {
            alert('Passwords Don\'t Match');
        }
    }
    return (
        <ImageBackground source={require('../images/wood.jpg')} style={styles.outer} >
            <ScrollView>
                <View style={styles.container} >
                    <Text style={styles.main} >PR</Text>
                    <View style={styles.inputs} >
                        <TextInput placeholderTextColor={"#c9c9c9"}  style={styles.userText} placeholder={'First Name'} onChangeText={(value) => setFirstName} />
                    </View>
                    <View style={styles.inputs} >
                        <TextInput placeholderTextColor={"#c9c9c9"}  style={styles.userText} placeholder={'Last Name'} onChangeText={(value) => setLastName} />
                    </View>
                    <View style={styles.inputs} >
                        <TextInput placeholderTextColor={"#c9c9c9"}  style={styles.userText} placeholder={'Email'} onChangeText={(value) => setEmail} />
                    </View>
                    <View style={styles.inputs} >
                        <TextInput secureTextEntry={true} placeholderTextColor={"#c9c9c9"}  style={styles.userText} placeholder={'Password'} onChangeText={(value) => setPassword} />
                    </View>
                    <View style={styles.inputs} >
                        <TextInput secureTextEntry={true} placeholderTextColor={"#c9c9c9"}  style={styles.userText} placeholder={'Confirm Password'} onChangeText={(value) => checkPasswordMatch(value)} />
                    </View>
                    <View style={styles.submitButton}>
                        <Button color={'white'} title={'Submit'} onPress={''} />
                    </View>
                    <View style={styles.bottom} >
                        <Text style={[styles.help, styles.moveToSignup]}>Don't have an account? Sign up here</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '95%'
    },
    inputs: {
        width: '80%',
        marginVertical: 10,
        padding: 12,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: 'rgba(255,119,0,0.78)',
        borderRadius: 8,
        marginHorizontal: '10%',
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
        fontSize: 100,
        borderWidth: 1,
        borderColor: '#eff4ff',
        paddingHorizontal: 24,
        color: '#efefff',
        marginTop: '20%',
        marginBottom: 21,
        textAlign: 'center',
    },
    help: {
        fontSize: 16,
        color: '#9a9a9a'
    },

    bottom: {
        opacity: 0.9,
        marginTop: 40,
    },
    moveToSignup: {
        textShadowColor: '#000',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
        fontWeight: 'bold',
    },
    submitButton: {
        marginTop: 32,
        backgroundColor: '#ababab',
        width: '35%',
        borderRadius: 5,
    },
})


export default SignUpPage;
