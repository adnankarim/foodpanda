/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

const App = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: isAndroid ? 0 : 0,
        }}>
        <View style={{ padding: 16, backgroundColor: 'green' }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: 'blue' }}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <StatusBar StatusBarStyle='default' />
    </>
  );
};

export default App;
