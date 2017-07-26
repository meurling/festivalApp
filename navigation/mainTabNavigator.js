import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from "../screens/homeScreen";
import ProfileScreen from "../screens/profileScreen";
import CouponScreen from "../screens/couponScreen";


export default TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Coupons: {
      screen: CouponScreen
    },
    Profile: {
      screen: ProfileScreen
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
  }
);
