# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: Ciara Molloy

## Overview.

### New Pages.

+ Top Rated (popular all time) Movies page
+ Movie Details now show the cast
+ Actor Details page
+ Discover TV Shows page
+ Top Rated (popular all time) TV Shows page

### New Features.

+ View TV Shows, Details about TV Shows and Top Rated TV Shows
+ View cast of movies and TV shows, and details about cast

## Setup requirements.

Run npm install and npm start.

## TMDB endpoints.

+ /movies/toprated - Movies with highest ratings
+ /tv/toprated - TV Shows with highest ratings
+ /movie/{movie_id}/credits - Cast of a movie based on ID
+ /tv/{tv_id}/credits - Cast of a TV show based on ID
+ /person/{person_id} - Details of a particular actor

## App Design.

### Component catalogue.

N/A

### UI Design.

![ ](./images/actordetails.png)

> Shows detailed information on an actor.

![ ](./images/moviedetails.jpg)

> Shows detailed information on a movie. Note the displayed cast.

![ ](./images/topratedmovies.jpg)

> Displays a list of movies with the highest ratings.

![ ](./images/discovertv.jpg)

> Displays a list of TV shows to discover.

![ ](./images/tvdetails.jpg)

> Shows detailed information on a TV show. Note the displayed cast.

![ ](./images/topratedtv.jpg)

> Displays a list of TV shows with the highest ratings.

### Routing.

+ /tv - displays a list of tv shows to discover
+ /tv/:id - shows details about a particular tv show
+ /tv/popular - displays a list of the top rated tv shows
+ /actor/:id - shows details about a particular actor

