import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantsInfo } from '../components/restaurant-info-card.component'
import styled from 'styled-components/native';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const SafeAreaContainer = styled.SafeAreaView`
 flex: 1;
 margin-top:${(props) => props.theme.space[0]};

`;
const ListItemContainer = styled.View`
 padding: ${(props) => props.theme.space[3]};
 background-color: ${(props) => props.theme.colors.bg.primary} ;

`;

const SearchContainer = styled(View)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;


export const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (
        <SafeAreaContainer>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>
            <FlatList
                data={restaurants}
                renderItem={({ item }) =>
                (
                    <ListItemContainer >
                        <RestaurantsInfo restaurant={item} />
                    </ListItemContainer>
                )
                }
                keyExtractor={(item, index) => index}
            />
        </SafeAreaContainer>
    );
}



