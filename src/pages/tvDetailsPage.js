import React from "react";
import { useParams } from 'react-router-dom';
import TVDetails from "../components/tvComponents/tvDetails";
import PageTemplate from "../components/tvComponents/templateTVPage";
import { getTVShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TVDetailsPage = (props) => {
    const { id } = useParams();

    const { data: TV, error, isLoading, isError } = useQuery(
        ["TV", { id: id }],
        getTVShow
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {TV ? (
                <>
                    <PageTemplate TV={TV}>
                        <TVDetails TV={TV} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for TV details</p>
            )}
        </>
    );
};

export default TVDetailsPage;