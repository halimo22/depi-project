import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.genre} ({movie.year})</p>
    </div>
  );
}

export default MovieCard;
