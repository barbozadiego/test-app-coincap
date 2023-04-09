import { useParams } from "react-router-dom"

import usePeticion from "../components/hooks/usePeticion";
import { CryptoInfo, CryptoHistory } from "../components/common/index";

import "../styles/crypto-page.css"


const CryptoPageView = () => {

  const { id } = useParams();

  const [cripto, cargandoCripto] = usePeticion(`assets/${id}`)
  const [history, cargandoHistory] = usePeticion(`assets/${id}/history?interval=d1`)

  if (cargandoCripto || cargandoHistory) return <span>Cargando...</span>
  
  return (
    <div className="cripto-page-container">
      {cripto && <CryptoInfo cripto={cripto} />}
      {history && <CryptoHistory history={history} />}
    </div>
  )
}
export default CryptoPageView