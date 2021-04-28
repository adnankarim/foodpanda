import { mocks, mockImages } from './mock';
import camelize from 'camelize';


export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        // console.log(mockImages[0])
        return {
            ...restaurant,
            photos: restaurant.photos.map((p) => (mockImages[Math.ceil(Math.random() * mockImages.length)])),
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });

    return camelize(mappedResults);
};
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {


    return new Promise((resolve, reject) => {

        const mock = mocks[location];
        if (!mock) {
            reject('not found');
        }

        resolve(mock);
    })
}

