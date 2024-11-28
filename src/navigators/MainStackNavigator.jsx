import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListProductScreen from '../screens/ListProductScreen';
import DetailProductScreen from '../screens/DetailProductScreen';
import { mainStackRoutes } from '../constants/Routes';

const MainStackNavigator = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <MainStack.Navigator
   // initialRouteName={mainStackRoutes.DetailProduct}
    screenOptions={{
        headerShown:false
    }}>
      <MainStack.Screen name={mainStackRoutes.ListProduct} component={ListProductScreen} />
      <MainStack.Screen name={mainStackRoutes.DetailProduct} component={DetailProductScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
