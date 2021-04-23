import React from 'react';
import {

  Platform,
  StatusBar,
} from 'react-native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';
const isAndroid = Platform.OS === 'android';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <StatusBar StatusBarStyle="default" />
    </>
  );
};

export default App;
