import React from 'react';
import {Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';



const SearchResult = () => {
    const openItem = (type, id) => {

    }

    return(
        <TouchableOpacity onPress={() => openItem(this.props.type, this.props.id)} >
            <ImageBackground source={{uri:this.props.url}} style={style.container} >
                <Text style={[style.resultText, style.typeOfContent]}>{this.props.type}</Text>
                <Text style={[style.resultText, style.name]}>{this.props.name}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        width: '80%',
        height: '20%',
        flex: 1,
        flexDirection: 'column',
    },
    resultText: {
        marginLeft: 12,
    },
    typeOfContent: {
        paddingHorizontal: 7,
        paddingVertical: 5,
        color: 'white',
        marginBottom: '40%',
        backgroundColor: 'rgba(255,119,0,0.78)',
    },
    name: {
        fontSize: 18,
        marginHorizontal: 4,
    },
})

export default SearchResult
