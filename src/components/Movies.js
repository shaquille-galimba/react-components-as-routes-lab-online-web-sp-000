import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
			<h1>Movies Page</h1>
			{movies.map(movie => {
				return (
					<div key={movie.title}>
						<h2>Name: {movie.title}</h2>
						<h3>Time: {movie.time}</h3>
						<h3>Genres:</h3>
						<ul>
							{movie.genres.map(genre => <li key={genre}>{genre}</li>)}
						</ul>
					</div>
				)})}
    </div>
  );
};

export default Movies;
