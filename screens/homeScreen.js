import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';


import FestivalScreen from "./festivalScreen";
import SelectFestivalScreen from "./selectFestivalScreen";




export default class HomeScreen extends React.Component {
  

  state = {
    selected: false,
  };
  render() {
    if (this.state.selected) {
      return <FestivalScreen />;
    }
    else return <SelectFestivalScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
