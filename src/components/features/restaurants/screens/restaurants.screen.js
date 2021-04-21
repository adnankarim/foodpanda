import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantsInfo } from '../components/restaurant-info-card.component'
import styled from 'styled-components/native'


const SafeAreaContainer = styled.SafeAreaView`
 flex: 1;
 margin-top:0px;

`;
const SearchContainer = styled(View)`
padding: 16px;
background-color: green;
`;

const RestaurantsListContainer = styled(View)`
flex: 1;
padding: 16px;
background-color: blue;
`;
export const RestaurantsScreen = () => {
    return (
        <SafeAreaContainer>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>
            <RestaurantsListContainer >
                <RestaurantsInfo />
            </RestaurantsListContainer>
        </SafeAreaContainer>
    );
}

