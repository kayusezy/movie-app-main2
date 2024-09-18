// src/MovieDetails.js
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import movies from './Movies';

function MovieDetails() {
  const { id } = useParams();
  const history = useHistory();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button onClick={() => history.push('/')}>Back to Home</button>
    </div>
  );
}

export default MovieDetails;
