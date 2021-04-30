import React, { createContext, useState, useEffect } from 'react';
import { restaurantsTransform, restaurantsRequest } from './restaurants.service';


export const RestaurantsContext = createContext();


export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(false);
                    setRestaurants(results);
                    setError(null);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err);
                });
        }, 2000);
    };
    useEffect(() => {
        retrieveRestaurants();
    }, []);




    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
}