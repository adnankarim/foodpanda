import React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import styled from 'styled-components';

const CardCover = styled(Card.Cover)`
padding:${props => props.theme.space[2]}
`;
const CardTitle = styled(Title)`
font-family:${(props) => props.theme.fonts.heading};
font-weight:${(props) => props.theme.fontWeights.regular};
font-size:${props => props.theme.sizes[1]}
margin-top:${(props) => props.theme.space[5]};
`;

export const RestaurantsInfo = ({ restaurant = {} }) => {
    const {
        name = 'Paitpooja',
        icon,
        photos = ['https://mcdonalds.com.pk/wp-content/uploads/nutirition-main-imgWOText.jpg'],
        address = '3567  Walnut Street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily } = restaurant;


    return (
        <>
            <Card>
                <CardCover source={{ uri: photos[0] }} />
                <Card.Content>
                    <CardTitle>{name}</CardTitle>
                </Card.Content>
            </Card>
        </>
    );
}

