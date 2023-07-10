import React from 'react';
import MovieItem from './MovieItem';


const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
