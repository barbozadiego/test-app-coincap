import { useEffect, useState } from "react";
import axios from "axios";


const App = () => {

  const [criptos, setCriptos] = useState()

  const API_URL = import.meta.env.VITE_APP_URL

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then(data => {
        setCriptos(data.data.data)
      })
      .catch(err => console.error(err))
  }, [])

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
          {
            criptos.map(({id, name, priceUsd}) => (
              <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
            ))}
      </ol>    
    </>
  )
}

export default App;
