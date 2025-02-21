import React from "react";
import MovieCard from "./MovieCard";

function RecommendedMovies({ movies }) {
  return (
    <div className="recommended-section">
      <h2>Recommended for You</h2>
      <div className="recommended-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedMovies;
