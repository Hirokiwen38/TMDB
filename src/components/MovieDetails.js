import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md">
        <img className="w-full h-auto" src={movie.posterUrl} alt={movie.title} />
        <h2 className="text-2xl font-bold mt-4">{movie.title}</h2>
        <p className="text-gray-500">Release Date: {movie.releaseDate}</p>
        <p className="text-yellow-500">Vote Average: {movie.voteAverage}</p>
        <p className="text-gray-500">Genres: {movie.genres.join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
