import React from "react";
import TVCard from "../tvCard";
import Grid from "@mui/material/Grid";

const TVList = ({ TV, action }) => {
  let tvCards = TV.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TVCard key={m.id} TV={m} action={action} />
    </Grid>
  ));
  return tvCards;
};

export default TVList;