import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, TextInput, ScrollView, Dimensions} from 'react-native';
import Navigation from './app/components/Navigation';
import Welcome from './app/components/Welcome';
import LoginView from './app/components/LoginView';
import SignUpPage from './app/components/SignUpView';
import TopBar from './app/components/TopBar';
import SearchResult from './app/components/SearchResult';
import SearchView from './app/components/SearchView'

const screenHeight = Dimensions.get('screen').height;


const App = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);


  return (
      <View style={style.screen} >
          <View>
              <TopBar/>
          </View>
          <ScrollView>
              <SearchView/>
          </ScrollView>
          <View>
              <Navigation/>
          </View>
      </View>
  );
};

const style = StyleSheet.create({
  screen: {
      color: '#000',
      height:screenHeight-screenHeight/200+5,
      width: '100%'
  },
})

export default App;
