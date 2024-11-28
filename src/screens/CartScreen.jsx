import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Page from '../components/Page';
import BasketCard from '../components/BasketCard';
import {useSelector} from 'react-redux';
import Header from '../components/Header';

const CartScreen = () => {
  const {cartItems} = useSelector(state => state.cart);
  //console.log('cc',cartItems);
  return (
    <>
      <Header title={'Sepet'} />
      <Page>
        <FlatList
          data={cartItems}
          renderItem={({item, index}) => (
            <BasketCard key={index} cartItem={item} />
          )}
        />
      </Page>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
