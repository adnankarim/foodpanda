import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const RestaurantsInfo = ({ restaurant = {} }) => {
    const { name = 'Paitpooja', icon, photos = ['https://mcdonalds.com.pk/wp-content/uploads/nutirition-main-imgWOText.jpg'], address = '3567  Walnut Street', isOpenNow = true, rating = 4, isClosedTemporarily } = restaurant;
    return (
        <>
            <Text>hello</Text>
        </>
    );
}

