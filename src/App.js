import React from 'react';
import './styles.css';
import MovieItem from './components/MovieItem';

const App = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">MovieDB</div>
        <nav className="navigation">
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">TV Shows</a>
          {/* Add more navigation links as needed */}
        </nav>
      </header>

      <nav className="navigation">
  <a href="#" // eslint-disable-next-line jsx-a11y/anchor-is-valid
    >Home</a>
  <a href="#" // eslint-disable-next-line jsx-a11y/anchor-is-valid
    >Movies</a>
  <a href="#" // eslint-disable-next-line jsx-a11y/anchor-is-valid
    >TV Shows</a>
  {/* Add more navigation links as needed */}
</nav>


      <main className="container">
        <h1>Popular Movies</h1>
        <div className="movie-list">
          <MovieItem />
          {/* Add more MovieItem components or use a loop to render multiple movies */}
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2023 MovieDB. All rights reserved.</p>
        <p>Powered by ReactJS</p>
      </footer>
    </div>
  );
};

export default App;
