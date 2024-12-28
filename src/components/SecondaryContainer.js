import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 z-20 relative pl-12">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
      </div>

      {/* 
    
     MovieList - Popular
      MovieCards * n
      MovieList - Now playing
      MovieList - Trending
      MovieList - Horror
    
    
     */}
    </div>
  );
};

export default SecondaryContainer;
