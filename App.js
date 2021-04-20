import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Searchbar } from 'react-native-paper';

const isAndroid = Platform.OS === 'android';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <StatusBar StatusBarStyle="default" />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? 0 : 0,
  },
  search: {
    padding: 16,
    backgroundColor: 'green',
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});
export default App;
