import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantsInfo } from '../components/restaurant-info.component'


export const RestaurantsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar placeholder="Search" />
            </View>
            <View style={styles.list}>
                <RestaurantsInfo />
            </View>
        </SafeAreaView>
    );
}


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