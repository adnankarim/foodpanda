import styled from "styled-components/native";
import { Card, Title, Paragraph } from "react-native-paper";
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';


export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantCard = styled(Card)`

`;
export const RestaurantCardContent = styled(Card.Content)`

`;

export const CardCover = styled(Card.Cover)`
    padding:${props => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.bg.primary};

`;

export const CardTitle = styled(Title)`
    font-family:${(props) => props.theme.fonts.heading};
    font-weight:${(props) => props.theme.fontWeights.regular};
    font-size:${props => props.theme.fontSizes.body};
    margin-top:${(props) => props.theme.space[5]};
`;
export const Address = styled(Paragraph)`
    font-family:${(props) => props.theme.fonts.body};
    font-weight:${(props) => props.theme.fontWeights.regular};
    font-size:${props => props.theme.fontSizes.caption};
`;
export const Rating = styled.View`
    flex-direction:row;
`;

export const Open = styled(SvgXml)`
margin-left: ${(props) => (props.theme.space[3])};
`;

export const StatusContainer = styled(View)`
 flex-direction:row;
`;
export const FontContainer = styled(View)`
 flex-direction:row;
 justify-content:space-between
`;
/* Not Used */
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;