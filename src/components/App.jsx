import { Navigate, Outlet } from "react-router-dom"
import useLocalStorage from "./hooks/useLocalStorage"
import Menu from "./layout/Menu"

const App = () => {

  const [token] = useLocalStorage("tokenCoinCap")

  if(!token) return <Navigate to="/login" />

  return (
    <>
        <Menu/>
        <Outlet />
    </>
  )
}
export default App