import { CryptoCard } from "../components/common/index";
import usePeticion from "../components/hooks/usePeticion";

import "../styles/crypto-grid.css"

const CryptoGridView = () => {

  const [criptos] = usePeticion('assets')

  if(!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1>Lista de criptomonedas</h1>
      <div className="cripto-container">
          {
            criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
              <CryptoCard
                  key={id}
                  id={id}
                  name={name}
                  priceUsd={priceUsd}
                  symbol={symbol}
                  changePercent24Hr={changePercent24Hr}
              />
            ))
          }
      </div>
    </div>
  )
}

export default CryptoGridView;