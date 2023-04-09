import axios from "axios"
import { useEffect, useState } from "react"

const usePeticion = (endpoint) => {

    const API_URL = import.meta.env.VITE_APP_URL
    const [data, setData] = useState()
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)

        axios.get(`${API_URL}${endpoint}`)
        .then(data => {
            setData(data.data.data)
            setCargando(false)
        })
        .catch(err => {
            console.log(err)
            setCargando(false)
        })
    }, [])

    return [data, cargando]
}
export default usePeticion