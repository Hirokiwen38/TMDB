import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.css';

import MovieList from './MovieList';
import Navbar from './Navbar';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [listType, setListType] = useState('popular');

  const fetchMovies = async (listType) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${listType}?api_key=a199ca3e31f7216b1c51332b8d9dbd7e`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies(listType)
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, [listType]);

  return (
    
    <div className={styles.container}>
    
    <Navbar />
    <h1 className="text-2xl font-bold mb-4">Movie App</h1>
    <div className="flex mb-4">
      <button
        className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setListType('upcoming')}
      >
        Upcoming
      </button>
      <button
        className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setListType('popular')}
      >
        Popular
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setListType('top_rated')}
      >
        Top Rated
      </button>
    </div>
    <MovieList movies={movies} />
  </div>
  );
};

export default HomePage;
