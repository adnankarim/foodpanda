import React from 'react';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { SvgXml } from 'react-native-svg';

import {
    RestaurantCard,
    Icon,
    Address,
    CardCover,
    CardTitle,
    Open,
    Rating,
    FontContainer,
    StatusContainer,
    RestaurantCardContent
} from './restaurant-info-card.styles';






export const RestaurantsInfo = ({ restaurant = {} }) => {
    const {
        name = 'Paitpooja',
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos = [],
        address = '3567  Walnut Street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true } = restaurant;
    const ratingArray = Array.from(new Array((Math.round(rating))))
    return (
        <>
            <RestaurantCard >
                <CardCover source={{ uri: photos[0] }} />
                <RestaurantCardContent>
                    <CardTitle>{name}</CardTitle>
                    <FontContainer>
                        <Rating>
                            {ratingArray.map((x, i) => <SvgXml key={i} xml={star} width={20} height={20} />)}
                        </Rating>
                        <StatusContainer>
                            {isClosedTemporarily && (
                                <Text variant="error" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    CLOSED TEMPORARILY
                                </Text>
                            )}
                            {isOpenNow && <Open xml={open} width={20} height={20} />}
                            <Spacer position="left" size="large">
                                <Icon source={{ uri: icon }} />
                            </Spacer>
                        </StatusContainer>
                    </FontContainer>
                    <Address>{address}</Address>
                </RestaurantCardContent>
            </RestaurantCard>
        </>
    );
}


