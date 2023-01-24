import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';


const NavBar = () => {

    /* este dato luego va a venir del context */
    /* const user = {name: 'Jus'}; */

	/* data que extraemos del context */
	const { user, login, logout } = useContext(UserContext);


	return (
		<nav className="navbar navbar-dark bg-dark mb-4">
			<div className="container">
				<span className="navbar-brand mb-0 h1">
                    { user ? `Hola ${user.name}`: 'Bienvenidx'}
                </span>

                {user ? 
				<button className="btn btn-primary" onClick={logout}>Cerrar Sesión</button>
                :
				<button className="btn btn-primary" onClick={login}>Iniciar Sesión</button>               
                }

			</div>
		</nav>
	);
};

export default NavBar;
