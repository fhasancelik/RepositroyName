import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Row from './Row';
import {colors} from '../constants/Colors';
import {fontSizes} from '../constants/Fonts';
import { useDispatch } from 'react-redux';
import { decremenetQuantity, incrementQuantity } from '../store/slice/cartSlice';

const BasketCard = ({cartItem}) => {

  const dispatch=useDispatch()
  const { title, price, quantity} = cartItem;
  return (
    <Row>
      <View style={styles.leftSide}>
        <Text>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.rightSide}>
        <TouchableOpacity onPress={()=>dispatch(decremenetQuantity(cartItem))} style={styles.changer}>
          <Text>-</Text>
        </TouchableOpacity>
        <View style={[styles.changer, {backgroundColor: colors.DARK_BLUE}]}>
          <Text style={{color: colors.WHITE}}>{quantity}</Text>
        </View>
        <TouchableOpacity style={styles.changer} onPress={()=>dispatch(incrementQuantity(cartItem))}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </Row>
  );
};

export default BasketCard;

const styles = StyleSheet.create({
  leftSide: {
    width: '70%',
    gap: 15,
  },
  price: {
    fontSize: fontSizes.fontM,
    color: colors.DARK_BLUE,
  },
  rightSide: {
    flexDirection: 'row',
  },
  changer: {
    backgroundColor: colors.WHITE,
    padding: 10,
  },
});
