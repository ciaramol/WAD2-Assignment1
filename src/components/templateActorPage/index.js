import React from "react";  // useState/useEffect redundant 
import ActorHeader from "../headerActor";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";


const TemplateActorPage = ({ person, children }) => {

    return (
        <>
            <ActorHeader person={person} />
            <Grid container spacing={5} sx={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}>
                        <ImageList
                            cols={1}>
                            <ImageListItem key={person.profile_path} cols={1}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                                    alt={person.profile_path}
                                />
                            </ImageListItem>

                        </ImageList>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    {children}
                    <Grid container>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateActorPage;