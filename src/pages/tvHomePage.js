import React from "react";
import { getTVShows } from "../api/tmdb-api";
import PageTemplate from '../components/tvComponents/templateTVListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const TVHomePage = (props) => {

  const { data, error, isLoading, isError } = useQuery('discover-tv', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const TV = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = TV.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  return (
    <PageTemplate
      title="Discover TV Shows"
      TV={TV}
      action={(TV) => {
        return <AddToFavouritesIcon TV={TV} />
      }}
    />
  );
};
export default TVHomePage;