import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import { CardContent, CardHeader } from "@mui/material";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };



const ActorDetails = ({ person }) => {  // Don't miss this!
    return (
        <>
            <Card style={{ marginBottom: 40, padding: 20 }} >
                <CardHeader title="Biography">
                </CardHeader>
                <CardContent>
                    <Typography variant="h9" component="p" style={{ fontFamily: 'arial' }} >
                        {person.biography}
                    </Typography>
                </CardContent>
            </Card>
            <Paper
                component="ul"
                sx={root}
            >

                <li>
                    <Chip label="AKA" sx={chip} color="primary" />
                </li>
                {person.also_known_as.map((aka) => (
                    <li key={aka}>
                        <Chip label={aka} sx={chip} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" sx={root}>

                <Chip icon={<LocationOnIcon />} label={`${person.place_of_birth}`} />
                <Chip
                    icon={<StarRate />}
                    label={`Popularity: ${person.popularity} `}
                />
                <Chip label={`Born: ${person.birthday}`} />
                {person.deathday ? (<Chip label={`Died: ${person.deathday}`} />) : null}
            </Paper>
            <Paper
                component="ul"
                sx={root}
            >
            </Paper>
            <Divider style={{ paddingTop: 20, paddingBottom: 20 }} />
        </>
    );
};

export default ActorDetails;