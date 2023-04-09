import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import '../../styles/menu.css';

const Menu = () => {
	const navigate = useNavigate();
	const user = useContext(UserContext);

	return (
		<nav className='main-menu'>
			<ul>
				<li>
					<NavLink to='/'>Inicio</NavLink>
				</li>
				<li>
					<NavLink to='/cryptocurrencies'>Lista de criptos</NavLink>
				</li>
				<li>
					<NavLink to='/profile'>Perfil de {user.name}</NavLink>
				</li>
				<li>
					<a
						onClick={() => {
							localStorage.removeItem('tokenCoinCap');
							navigate('/login');
						}}
					>
						Cerrar Sessión
					</a>
				</li>
			</ul>
		</nav>
	);
};
export default Menu;
