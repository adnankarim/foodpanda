import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  Text,
  Platform,
  StatusBar,
} from 'react-native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();


// const isAndroid = Platform.OS === 'android';

const MapScreen = () => {
  return (<Text>Maps</Text>)
}
const SettingsScreen = () => {
  return (<Text>Settings</Text>)
}
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',

            }}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsScreen}
              options={{
                tabBarLabel: 'Restaurants',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />
                ),
              }} />
            <Tab.Screen
              name="Maps"
              component={MapScreen}
              options={{
                tabBarLabel: 'Maps',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="map" color={color} size={size} />
                ),
              }} />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="cog" color={color} size={size} />
                ),
              }} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar StatusBarStyle="default" />
    </>
  );
};

export default App;
