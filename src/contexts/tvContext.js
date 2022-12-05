import React, { useState } from "react";

export const TVContext = React.createContext(null);

const TVContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState({})
    const [favourites, setFavourites] = useState([])

    const addToFavourites = (TV) => {
        let newFavourites = [...favourites];
        if (!favourites.includes(TV.id)) {
            newFavourites.push(TV.id);
        }
        setFavourites(newFavourites);
    };

    const addReview = (TV, review) => {
        setMyReviews({ ...myReviews, [TV.id]: review })
    };

    // We will use this function in a later section
    const removeFromFavourites = (TV) => {
        setFavourites(favourites.filter(
            (mId) => mId !== TV.id
        ))
    };

    return (
        <TVContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview
            }}
        >
            {props.children}
        </TVContext.Provider>
    );
};

export default TVContextProvider;