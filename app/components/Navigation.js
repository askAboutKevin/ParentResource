import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const navbarHeight = screenHeight + windowHeight;

const Navigation = () => {
    return(
        <View style={style.container}>
            <View style={style.nav} >
                <TouchableOpacity>
                    <Image
                        style={style.articleIcon}
                        source={require('../images/articles-icon.png')}
                    />
                </TouchableOpacity>
                {/*//Learn*/}
                <TouchableOpacity>
                    <Image
                        style={style.tutorialIcon}
                        source={require('../images/tutorial-icon.png')}
                    />
                    {/*//Practice*/}
                </TouchableOpacity>
                <Image
                    style={[style.icon, style.mainIcon]}
                    source={require('../images/PR-logo.png')}
                />
                <TouchableOpacity>
                    <Image
                        style={style.chatIcon}
                        source={require('../images/messaging-icon.png')}
                    />
                </TouchableOpacity>
                {/*//chat*/}
                <TouchableOpacity>
                    <Image
                        style={style.userIcon}
                        source={require('../images/user-icon.png')}
                    />
                </TouchableOpacity>
                {/*//Me*/}
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#d6d6d6',
        paddingBottom: 10,
        paddingTop: 2,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderTopWidth: 2,
        borderTopColor: 'rgb(255,160,0)',
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    articleIcon: {
        width: 60,
        height: 60,
        marginLeft: 14,

    },
    tutorialIcon: {
        width: 52,
        height: 52,

    },
    chatIcon: {
        width: 36,
        height: 36,

    },
    userIcon: {
        width: 38,
        height: 38,
        marginRight: 14,

    },
    mainIcon: {
        borderWidth: 4,
        borderRadius: 48,
        width: 48,
        height: 48,
    },
    iconLabel: {
        fontSize: 10,
        color: '#000',
        marginBottom: 12,
        flexDirection: 'row',
    },
})


export default Navigation;
