import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import { MOVIE_POSTER } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={MOVIE_POSTER} alt="Movie Poster" />
      </div>
      <GPTSearchBar /> Movie Suggetion
    </div>
  );
};

export default GPTSearch;
