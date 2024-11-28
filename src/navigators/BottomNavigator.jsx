import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStackNavigator from './MainStackNavigator';
import CartScreen from '../screens/CartScreen';
import Home from '../icons/Home';
import {colors} from '../constants/Colors';
import Basket from '../icons/Basket';
import DetailProductScreen from '../screens/DetailProductScreen';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const {cartItems}=useSelector(state=>state.cart)
///console.log('Sepet',cartItems)
  return (
    <Tab.Navigator
    
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let tabIcon;
          if (route.name === 'Home') {
            tabIcon = focused ? (
              <Home fill={colors.DARK_BLUE} />
            ) : (
              <Home fill={'none'} stroke={colors.BLACK} strokeWidth={20} />
            );
          } else if (route.name === 'Cart') {
            tabIcon = focused ? (
              <Basket fill={colors.DARK_BLUE} />
            ) : (
              <Basket fill={'none'} stroke={colors.BLACK} strokeWidth={20} />
            );
          }
          return tabIcon;
        },
        tabBarBadge: route.name == 'Cart' ? cartItems.length : null,
      })}>
      {/* <Tab.Screen name="Detail" component={DetailProductScreen} /> */}
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
