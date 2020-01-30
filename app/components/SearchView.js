import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, TextInput, FlatList, Image, Dimensions} from 'react-native';
import SearchResult from './SearchResult';

const screenHeight = Dimensions.get('screen').height;

const SearchView = (query) => {

    const [results, updateResults] = useState([]);

    const querySearch = ({query}) => {
    //    make an api call and search through articles and tutorials for the query
    };

    const checkResults = () => {
        if(results.length === 0) {

        }
        else {

        }

    }

    if(results.length === 0) {
        return(
            <View style={styles.container}>
                <Text style={[{borderBottomWidth: 1, fontWeight: 'bold', color: '#4f4f4f'}]} >No Results Found</Text>
            </View>
        );
    }
    else {
        return(
            <View>
                <FlatList getItemCount={results.length}
                          data={results}
                          getItem={ ({result}) => <SearchResult id={result.id} type={'article'} name={result.name} url={result.link} />}
                          keyExtractor={result => result.id}
                          />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: screenHeight-100,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SearchView;
