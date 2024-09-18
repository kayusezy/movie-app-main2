// src/components/MovieCard.js
import PropTypes from 'prop-types';
import './MovieCard.css' // Optional: Add custom styling

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterURL: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default MovieCard;
