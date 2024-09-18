// src/MovieList.js
import React from 'react';
import movies from './movies';
import MovieCard from './MovieCard';

function MovieList() {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
