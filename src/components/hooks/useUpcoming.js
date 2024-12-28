import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../../utils/movieSlice";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect, useState } from "react";
import axios from "axios";

const useUpcoming = () => {
  // Fetch data from TMDB Api and create a store
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      if (response.data?.results) {
        dispatch(addUpcomingMovies(response.data.results));
      } else {
        console.error("Unexpected API response structure:", response);
      }
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, [dispatch]);
};

export default useUpcoming;
