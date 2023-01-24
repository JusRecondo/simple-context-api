import React, { createContext, useState } from "react";
import initialMovies from "../consts/initialMovies";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {

    const data = { movies: initialMovies };

    return (
        <MoviesContext.Provider value={ data }>
            { children }
        </MoviesContext.Provider>
    );
}