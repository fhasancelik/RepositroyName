import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import {useNavigation} from '@react-navigation/native';
import {mainStackRoutes} from '../constants/Routes';
import axios from 'axios';

const ListProductScreen = () => {
  const [products, setProducts] = useState();

  const navigation = useNavigation();
  /**
   * https://fakestoreapi.com/products bu endpointe istek atın
   * atılan istek sonucu dönen ürünleri ekrana basın
   */
  const fetchProducts = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(products => setProducts(products.data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View>
      <Header title="E-Market" />
      <View
        style={{
          paddingHorizontal: 5,
          paddingVertical: 3,
        }}>
          <FlatList
          data={products}
          contentContainerStyle={{alignItems:'center'}}
          numColumns={2}
          renderItem={({item,index})=>(
            <ProductCard
            key={index}
            productInfo={item}
            onPress={() => navigation.navigate(mainStackRoutes.DetailProduct,{product:item})}
          />
          )}
          />
    
      </View>
    </View>
  );
};

export default ListProductScreen;

const styles = StyleSheet.create({});
