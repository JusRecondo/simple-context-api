import React, { createContext, useState } from 'react';

//Contexto
export const UserContext = createContext();

//mock data
const initialUser = {
	id: 1,
	name: 'Just',
	favoriteMovies: [1, 2, 3],
};

//Componente provider, manejo de estado del componente
export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(initialUser);

	/* Simula un login */
	const login = () => {
		setUser(initialUser);
	};

	/* Simula un logout */
	const logout = () => {
		setUser(null);
	};

    const toggleFavoriteMovieToUser = (movieId) => {

        const isFavorite = user ? user.favoriteMovies.includes(movieId) : null;

        const favoriteMovies = isFavorite 
            ? user.favoriteMovies.filter(favMovId => favMovId !== movieId) 
            : [...user.favoriteMovies, movieId] 

        setUser({
            ...user,
            favoriteMovies
        })
    }

	const data = { user, login, logout, toggleFavoriteMovieToUser };

	return (
		/* este componente va a envolver a otros comp que necesiten acceder a la data del context */
		<UserContext.Provider value={data}>{children}</UserContext.Provider>
	);
};
