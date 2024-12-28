import React from "react";
import { TMDB_IMG } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={TMDB_IMG + posterPath} alt="IMG" />
    </div>
  );
};

export default MovieCards;
