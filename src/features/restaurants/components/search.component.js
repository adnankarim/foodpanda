import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';
import { Searchbar } from 'react-native-paper';




const SearchContainer = styled(View)`
padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState();
    console.log(searchKeyword);
    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    if (!text.length) {
                        return;
                    }
                    setSearchKeyword(text);
                }}
            />
        </SearchContainer>

    );
}