import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Movie = ({movie}) => {
    const { user, toggleFavoriteMovieToUser } = useContext(UserContext);

    const isFavorite = user ? user.favoriteMovies.includes(movie.id) : null;

    const imgStyles = {
        height: '260px',
        objectFit: 'cover',
    }
    

	return (
        <div className="card">
            <img
                src={movie.imageUrl}
                alt={movie.title}
                className="card-img-top"
                style={imgStyles}
            />
            <div className="card-body">
                <h4>{movie.title}</h4>
                {user ?
                <button 
                    className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}
                    onClick={() => toggleFavoriteMovieToUser(movie.id)}
                >
                    Favorito
                </button>
                :
                ''
                }
            </div>
        </div>
    );
};

export default Movie;
