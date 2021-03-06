import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { RestaurantsInfo } from '../components/restaurant-info-card.component'
import styled from 'styled-components/native';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from '../components/search.component';

const SafeAreaContainer = styled.SafeAreaView`
 flex: 1;
 margin-top:${(props) => props.theme.space[0]};
`;

const ListItemContainer = styled.View`
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
    return (
        <SafeAreaContainer>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={Colors.blue300} />
                </LoadingContainer>
            )}
            <Search />
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



