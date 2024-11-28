import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../constants/Colors';
import {fontSizes, fontWeights} from '../constants/Fonts';
import CustomButton from './CustomButton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slice/cartSlice';

const ProductCard = ({onPress,productInfo}) => {
  const {title, price, image} = productInfo;
const dispatch=useDispatch()

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.price}>{price}₺</Text>
        <Text>{title}</Text>
      </View>
      <CustomButton
        onPress={() => dispatch(addToCart(productInfo))}
        buttonTitle="Sepete Ekle"
      />
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    gap: 15,
    borderWidth: 1 / 5,
    padding: 10,
    margin: 15,
  },
  info: {
    gap: 15,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  price: {
    color: colors.LIGHT_BLUE,
    fontSize: fontSizes.fontM,
    fontWeight: fontWeights.fontBold,
  },
});
