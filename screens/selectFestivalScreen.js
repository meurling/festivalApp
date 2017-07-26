import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

import FestivalScreen from "./festivalScreen";

const NavStack = StackNavigator({
  FestivalScreen: {
    screen: FestivalScreen,
  },
});


export default class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>choose festival</Text>
        <Button
        title="Select SummerBurst 2017"
        onPress={() =>
          navigation.navigate('FestivalScreen', { name: 'SummerBurst' })
        }
      />
      </View>
    );
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
