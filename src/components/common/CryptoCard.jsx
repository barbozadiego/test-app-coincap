import { Link } from 'react-router-dom';
import '../../styles/crypto-card.css';

const CryptoCard = ({ id, name, priceUsd, symbol, changePercent24Hr }) => {
	return (
		<Link to={`/cryptocurrencies/${id}`}>
			<div className='cripto-card' key={id}>
				<h2>{name}</h2>
				<div className='info'>
					<p>
						<span className='label'>Precio: </span>
						{parseFloat(priceUsd).toFixed(4)}
					</p>
					<p>
						<span className='label'>Código: </span>
						{symbol}
					</p>
					<p>
						<span className='label'>Variacion 24hrs: </span>
						<span
							className={
								parseFloat(changePercent24Hr) > 0 ? 'positive' : 'negative'
							}
						>
							{parseFloat(changePercent24Hr).toFixed(3)}%
						</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default CryptoCard;
