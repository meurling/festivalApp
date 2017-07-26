import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from "./mainTabNavigator";
import FestivalScreen from "../screens/festivalScreen";
import SelectFestivalScreen from "../screens/selectFestivalScreen";
import HomeScreen from "../screens/homeScreen";

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
    HomeScreen: {
      screen: HomeScreen,
    },
    FestivalScreen: {
      screen: FestivalScreen,
    },
    SelectFestivalScreen: {
      screen: SelectFestivalScreen,
    },
});

export default class RootNavigator extends React.Component {
  render() {
    return <MainTabNavigator />;
  }
}
