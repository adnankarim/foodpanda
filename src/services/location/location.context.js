import React, { createContext, useState, useEffect } from 'react';
import { locationRequest, locationTransform } from './location.service'


export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState('san francisco');

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        if (!searchKeyword.length) {
            return
        }
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false);
                setLocation(result);
                console.log(result)
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            })
    }
    useEffect(() => {
        onSearch(keyword)
    }, [])

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch
                ,
                keyword
            }}
        >
            { children}
        </LocationContext.Provider >


    );
}

