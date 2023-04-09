import { Link } from "react-router-dom"

import "../styles/home.css"

const HomeView = () => {
  return (
    <div className="home-container">
        <h1 className="title">Bienvenido a CoinCap</h1>
        <p className="subtitle">Cónoce las 100 criptos más usadas</p>
        <Link to="/cryptocurrencies" className="link">Ver criptomonedas</Link>
    </div>
  )
}
export default HomeView