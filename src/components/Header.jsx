import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BabelConfig from '../../babel.config';
import Back from '../icons/Back';
import {colors} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {fontSizes, fontWeights} from '../constants/Fonts';

const Header = ({title, onBack}) => {
console.log('Header Render Edildi')
  const navigation = useNavigation();
  //&& varsa 
  //? ise
  //: değilse
  //== eşitse (tipi önemli değil)
  //=== eşitse (tip kontrolüde yapılır)
  return (
    <View style={styles.headerContainer}>
      {onBack===true && (
        <Back
          style={{
            padding: 20,
          }}
          onPress={() => navigation.goBack()}
          fill={colors.WHITE}
          width={25}
          height={25}
        />
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.DARK_BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontWeight: fontWeights.fontBold,
    color: colors.WHITE,
    fontSize: fontSizes.fontXL,
  },
});
