import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from "react-navigation";

import RootNavigation from "./navigation/rootNavigation.js";
import HomeScreen from "./screens/homeScreen.js";
import MainTabNavigator from "./navigation/mainTabNavigator";
import ProfileScreen from "./screens/profileScreen";
import FestivalScreen from "./screens/festivalScreen";
import CouponScreen from "./screens/couponScreen";

const MainScreenNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Coupons: {
    screen: CouponScreen,
    title: "Coupons",
  },
  Profile: {
    screen: ProfileScreen,
  },
},
{
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
}
);

const RootNavigator = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
  },
  FestivalScreen: {
    screen: FestivalScreen,
  },
});


export default class App extends React.Component {
  render() {
    return (
      <RootNavigation />
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
