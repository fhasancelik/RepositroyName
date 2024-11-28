import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {fontSizes, fontWeights} from '../constants/Fonts';
import CustomButton from '../components/CustomButton';
import Page from '../components/Page';
import {useRoute} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slice/cartSlice';
const DetailProductScreen = () => {
  const route = useRoute();
const dispatch=useDispatch()
  const {id, title, price, description, image} = route.params.product;
  return (
    <>
      <Header onBack title={title} />

      <Page>
        <View style={styles.top}>
          <Image source={{uri: image}} style={styles.image} />
          <View style={styles.textArea}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View>
            <Text>Fiyat</Text>
            <Text>{price}₺</Text>
          </View>
          <CustomButton
          onPress={()=>dispatch(addToCart(route.params.product))}
            buttonBodyStyle={{
              width: 'auto',
            }}
            buttonTitle={'Sepete Ekle'}
          />
        </View>
      </Page>
    </>
  );
};
export default DetailProductScreen;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },
  textArea: {
    gap: 15,
    marginTop: 20,
  },
  title: {
    fontSize: fontSizes.fontM,
    fontWeight: fontWeights.fontBold,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
