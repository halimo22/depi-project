import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default MovieList;
