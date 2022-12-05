import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import ActorDetailsPage from './pages/actorDetailsPage';
import TVHomePage from "./pages/tvHomePage";
import TVPage from "./pages/tvDetailsPage";
import PopularTVPage from "./pages/popularTVPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader /> {/*New Header */}
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route exact path="/movies/popular" element={<PopularMoviesPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/actor/:id" element={<ActorDetailsPage/>}/>
            <Route path="/tv" element={<TVHomePage/>}/>
            <Route path="/tv/:id" element={<TVPage/>}/>
            <Route path="/tv/popular" element={<PopularTVPage/>}/>
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);