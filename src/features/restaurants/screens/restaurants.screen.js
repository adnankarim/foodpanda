import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantsInfo } from '../components/restaurant-info-card.component'
import styled from 'styled-components/native'


const SafeAreaContainer = styled.SafeAreaView`
 flex: 1;
 margin-top:${(props) => props.theme.space[0]};

`;
const SearchContainer = styled(View)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantsListContainer = styled(View)`
flex: 1;
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
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

