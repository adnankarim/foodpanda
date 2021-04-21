import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
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
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        </>
    );
}

