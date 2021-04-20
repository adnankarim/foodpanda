import React from 'react';
import {

  Platform,
  StatusBar,
} from 'react-native';
import { RestaurantsScreen } from './src/components/features/restaurants/screens/restaurants.screen'
const isAndroid = Platform.OS === 'android';

const App = () => {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar StatusBarStyle="default" />
    </>
  );
};

export default App;
