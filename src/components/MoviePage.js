import React, { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails';
import MovieCredits from './MovieCredits';

const MoviePage = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=a199ca3e31f7216b1c51332b8d9dbd7e`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMovieCredits = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a199ca3e31f7216b1c51332b8d9dbd7e`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movie credits');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails(match.params.id)
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));

    fetchMovieCredits(match.params.id)
      .then((data) => setCredits(data.cast))
      .catch((error) => console.error(error));
  }, [match.params.id]);

  return (
    <div>
      {movie && <MovieDetails movie={movie} />}
      {credits.length > 0 && <MovieCredits credits={credits} />}
    </div>
  );
};

export default MoviePage;
