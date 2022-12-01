import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails/";
import PageTemplate from "../components/templateActorPage";
//import useMovie from "../hooks/useMovie";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorDetailsPage = (props) => {
  const { id } = useParams();

  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getActor
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <ActorDetails person={person} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;