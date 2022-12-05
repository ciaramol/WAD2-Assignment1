import React, { useState } from "react";

export const TVContext = React.createContext(null);

const TVContextProvider = (props) => {
    const [favouritesTV, setFavouritesTV] = useState([])
    const [myReviews, setMyReviews] = useState([])


    const addToFavouritesTV = (TV) => {
        console.log(TV.name);
        let newFavouritesTV = [...favouritesTV];
        if (!favouritesTV.includes(TV.id)) {
            newFavouritesTV.push(TV.id);
        }
        setFavouritesTV(newFavouritesTV);
    };

    const removeFromFavouritesTV = (TV) => {
        setFavouritesTV(favouritesTV.filter(
            (mId) => mId !== TV.id
        ))
    };

    const addReview = (TV, review) => {
        setMyReviews({ ...myReviews, [TV.id]: review })
    };

    return (
        <TVContext.Provider
            value={{
                favouritesTV,
                addToFavouritesTV,
                removeFromFavouritesTV,
                addReview,
            }}
        >
            {props.children}
        </TVContext.Provider>
    );
};

export default TVContextProvider;