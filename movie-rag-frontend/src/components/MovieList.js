import React from "react";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
