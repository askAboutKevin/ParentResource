import React from 'react'
import {View, Text, StyleSheet, Button, ImageBackground, Image, SafeAreaView} from 'react-native'


const Welcome = () => {
    return (
        <ImageBackground source={require('../images/mother-son.jpg')} style={styles.outer}>
            <View style={styles.container} >
                <Text style={styles.main} >PR</Text>
                <Text style={{marginTop: 24, marginBottom: 56, fontSize: 24, color: '#eaeaff'}}>PARENT RESOURCE</Text>
                <View style={styles.orangeButton}>
                    <Button color={'#efefff'} title={'Sign Up'} onPress={''} />
                </View>
                <View style={styles.whiteButton}>
                    <Button style={styles.whiteButton} color={'#efefff'} title={'Log In'} onPress={''} />
                </View>
            </View>
        </ImageBackground>


    );
}

const styles = StyleSheet.create({
    main: {
        marginBottom: 24,
        marginVertical: '56%',
        fontSize: 128,
        borderWidth: 2,
        borderColor: '#eff4ff',
        paddingHorizontal: 24,
        color: '#efefff',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    outer: {
        width: '100%',
        height: '100%',
        opacity: 0.82,
    },
    whiteButton: {
        borderWidth: 2,
        borderColor: '#efefff',
        width: 148,
        borderRadius: 50,
        marginVertical: 10,
    },
    orangeButton: {
        backgroundColor: '#ff8f00',
        width: 148,
        borderRadius: 50,
        marginVertical: 10,
    },
})


export default Welcome;
