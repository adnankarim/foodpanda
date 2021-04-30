import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantsInfo } from '../components/restaurant-info-card.component'
import styled from 'styled-components/native';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { LocationContext } from '../../../services/location/location.context';
import { ActivityIndicator, Colors } from "react-native-paper";

const SafeAreaContainer = styled.SafeAreaView`
 flex: 1;
 margin-top:${(props) => props.theme.space[0]};

`;
const ListItemContainer = styled.View`
 padding: ${(props) => props.theme.space[3]};

`;

const SearchContainer = styled(View)`
padding: ${(props) => props.theme.space[3]};
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    const loc = useContext(LocationContext);
    console.log(loc);
    return (
        <SafeAreaContainer>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={Colors.blue300} />
                </LoadingContainer>
            )}
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



