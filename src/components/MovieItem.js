import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  // Check if movie is defined before accessing its properties
  if (!movie) {
    return null; // or return a placeholder if movie is not available
  }

  return (
    <div className="bg-white rounded shadow p-4">
      <Link to={`/movie/${movie.id}`}>
        <img className="w-full h-auto" src={movie.posterUrl} alt={movie.title} />
        <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
        <p className="text-gray-500">{movie.releaseDate}</p>
        <p className="text-yellow-500">Vote: {movie.voteAverage}</p>
        <p className="text-gray-500">Genres: {movie.genres.join(', ')}</p>
      </Link>
    </div>
  );
};

export default MovieItem;

