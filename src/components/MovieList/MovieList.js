import React, { useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import Movie from '../Movie/Movie';

const MovieList = () => {

    //desestructurar la data, recordar que es un objeto
    const { movies } = useContext(MoviesContext);
   
	return (
		<div className="container">
			<div className="row">
            {movies ?
				movies.map((movie) => (
					<div className="col-md-4" key={movie.id}>
						<Movie movie={movie} />
					</div>
				))
            :        
            <p>Data is loading...</p>}
			</div>
		</div>
	);
};

export default MovieList;
