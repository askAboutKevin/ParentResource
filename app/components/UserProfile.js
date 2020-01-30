import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList, Image, ScrollView} from 'react-native';

const UserProfile = () => {
    return(
        <ScrollView>
            <View style={style.card} >
                <View style={style.innerCard} >
                    <View style={style.innerCardLeft} >
                        <Image
                            style={style.icon}
                            source={{url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png'}}
                        />
                        <Button title={'Update Profile'} onPress={} />
                    </View>
                    <View style={style.innerCardRight} >
                        <Text>Kevin Dowdy</Text>
                        <Text>Student Location:</Text>
                        <Text>KIPP College Prep</Text>
                        <Text>Bronx, NY</Text>
                    </View>
                </View>
            </View>
            <View style={style.card} >
                <View style={style.innerCard} >
                    <View style={style.innerCardLeft} >
                        <Image
                            style={style.icon}
                            source={{url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png'}}
                        />
                    </View>
                    <View style={style.innerCardRight} >
                        <Text>Growth Path: Communication</Text>
                        <Text>Connecting with your child</Text>
                        <Text>Next Milestone:</Text>
                        <Text>Complete this tutorial - </Text>
                    </View>
                </View>
            </View>
            <View style={style.card} >
                <View style={style.innerCard} >
                    <View style={style.innerCardLeft} >
                        <Image
                            style={style.icon}
                            source={{url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png'}}
                        />
                    </View>
                </View>
                <View style={style.innerCardRight} >
                    <Text>Buddy Jr.</Text>
                    <Text>Current Area of Growth:</Text>
                    <Text>KIPP College Prep</Text>
                    <Text>Bronx, NY</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    card: {
        margin: 5,
        shadowOffset: {
            width: 10,  height: 10,
        },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowRadius: 2,
        elevation: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    innerCardLeft: {
        flexDirection: 'column',
    },
    innerCardRight: {
        flexDirection: 'column',
    },
    innerCard: {
        flexDirection: 'row',
    }
})

export default UserProfile;
