import { parseFloatNumber } from '../../helpers/numbers';
import dayjs from 'dayjs';
dayjs.locale('es'); // use Spanish locale globally

const CryptoHistory = ({ history }) => {
	return (
		<div className='history'>
			<table>
				<thead>
					<tr>
						<th>Fecha</th>
						<th>Precio</th>
					</tr>
				</thead>
				<tbody>
					{history.map(({ date, priceUsd, time }) => (
						<tr key={time}>
							<td className='label'>{dayjs(date).format('ddd DD MMM YYYY')}</td>
							<td className='price'>{parseFloatNumber(priceUsd, 3)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default CryptoHistory;
