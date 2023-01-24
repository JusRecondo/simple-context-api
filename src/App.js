import React, { useState } from 'react';
import MovieList from './components/MovieList/MovieList';
import NavBar from './components/NavBar/NavBar';
import { MoviesProvider } from './contexts/MoviesContext';
import { UserProvider } from './contexts/UserContext';


function App() {

	return (
		<div className="App">
		<UserProvider>
					<NavBar />
			<MoviesProvider>
					<MovieList />
			</MoviesProvider>
		</UserProvider>
		</div>
	);
}

export default App;
