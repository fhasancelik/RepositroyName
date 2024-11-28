import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import BottomNavigator from './src/navigators/BottomNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.flex}>
        <NavigationContainer>
          <BottomNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
