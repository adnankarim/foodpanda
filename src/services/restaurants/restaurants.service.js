import { mocks } from './mock';
import camelize from 'camelize';


const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });

    return camelize(mappedResults);
};
export const RestaurantsRequest = (location = "51.219448,4.402464") => {


    return new Promise((resolve, reject) => {

        const mock = mocks[location];
        if (!mock) {
            reject('not found');
        }

        resolve(mock);
    })
}

RestaurantsRequest().then(RestaurantsTransform).then((res) => {
    console.log(res)
})