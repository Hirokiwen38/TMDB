import React from 'react';

const MovieCredits = ({ credits }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Movie Credits</h2>
      <ul className="list-disc ml-8">
        {credits.map((credit) => (
          <li key={credit.id}>{credit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCredits;
