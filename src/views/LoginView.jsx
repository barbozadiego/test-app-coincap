import axios from 'axios';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useLocalStorage from '../components/hooks/useLocalStorage';

const LoginView = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [token, setToken] = useLocalStorage('tokenCoinCap');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const handleOnChange = e => {
		const tgt = e.target;

		if (tgt.name === 'email') setEmail(tgt.value);
		if (tgt.name === 'password') setPassword(tgt.value);
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		let user = { email, password };
		axios
			.post('https://reqres.in/api/login', user)
			.then(data => {
				setLoading(false);
				setToken(data.data.token);
				navigate('/');
			})
			.catch(err => {
				setLoading(false);
				// console.log(err)

				// console.table(err)
				setError(err.response.data.error);
			});
	};

	if (token) return <Navigate to='/' />;

	return (
		<div className='login-container'>
			<form onSubmit={handleOnSubmit}>
				<div className='field'>
					<label htmlFor='email'>Correo Electrónico</label>
					<input type='email' name='email' onChange={handleOnChange} />
				</div>
				<div className='field'>
					<label htmlFor='password'>Contraseña</label>
					<input type='password' name='password' onChange={handleOnChange} />
				</div>
				<div className='submit'>
					<input type='submit' value={loading ? 'Cargando' : 'Ingresar'} />
				</div>
			</form>
			{error && <span>Error: {error}</span>}
		</div>
	);
};
export default LoginView;
