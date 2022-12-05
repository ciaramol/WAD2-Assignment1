import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/movieComponents/templateMoviePage";
import MovieReview from "../components/movieComponents/movieReview";

const MovieReviewPage = (props) => {
  let location = useLocation();
  const { movie, review } = location.state;

  return (
    <PageTemplate movie={movie}>
      <MovieReview review={review} />
    </PageTemplate>
  );
};

export default MovieReviewPage;