import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

const TopBar = () => {

    const [searchBarOpen, changeSearchBarStatus] = useState(false);
    const [cancelButtonShowing, changeCancelButton] = useState(false);

    // function to empty the search value if pressed cancel

    const cancelSearch = () => {
        changeSearchBarStatus(false)
        showCancelButton(false)
        console.log('search bar open' + searchBarOpen)
        console.log('cancel button showing' + cancelButtonShowing)
    };

    const showCancelButton = (e) => {
        changeCancelButton(e)
    }

    return (
        <View style={style.container} >
            <View style={style.inputArea}  >
                <TextInput style={(searchBarOpen && cancelButtonShowing)? style.notSearching : style.searching}
                           clearButtonMode={'while-editing'}
                           onFocus={() => {changeSearchBarStatus(true)}}
                           placeholder={'Search...'}
                           maxLength={28}
                           isFocus={()=> showCancelButton}
                />
                <Button color={'white'} title={(searchBarOpen == true) ? 'Cancel' : ''} onPress={cancelSearch} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#d6d6d6',
        flexDirection: 'row',
        marginBottom: 5,
    },
    inputArea: {
        marginTop: screenHeight/28,
        marginBottom: 8,
        paddingVertical: 6,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    notSearching: {
        borderWidth: 0,
    },
    searching: {
        borderWidth: 0,
        borderRadius: 10,
        width: '70%',
        textAlign: 'center',
    },
})
export default TopBar;
