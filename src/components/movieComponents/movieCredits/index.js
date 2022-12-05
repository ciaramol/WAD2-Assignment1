import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import img from '../../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import { getCredits } from "../../../api/tmdb-api";

export default function Credits(movie) {
    const [credits, setCredits] = useState([]);
    useEffect(() => {
        getCredits(movie.movie.id).then((c) => {
            setCredits(c);
        });
    }, [movie.movie.id]);

    return (
        <Card style={{ maxHeight: 1000, overflow: 'scroll' }}>
            <Grid container display="flex"
                justifyContent="center"
                alignItems="center">
                {credits.map((c) => (
                    <Grid item xs={3} display="flex"
                        justifyContent="center"
                        alignItems="center" style={{ padding: 10 }}>
                        <Link to={`/actor/${c.id}`} style={{ textDecoration: "none" }}>
                            <Card sx={{ maxWidth: 400, width: 300 }} >
                                <CardHeader
                                    title={c.name}
                                    subheader={c.character}
                                />
                                <CardMedia
                                    sx={{ height: 300 }}
                                    image={c.profile_path ? `https://image.tmdb.org/t/p/w500/${c.profile_path}` : img
                                    }
                                />
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Card>
    );
}