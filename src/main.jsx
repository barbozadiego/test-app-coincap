import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import { UserContextProvider } from './context/UserContext'
import { HomeView, ProfileView, CryptoPageView, CryptoGridView, Page404View, LoginView } from './router'
import App from './components/App'

import "./styles/main.css"


createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <Router>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route index element={<HomeView />} />
                    <Route path='profile' element={<ProfileView />} />
                </Route>
                <Route path='/cryptocurrencies' element={<App />} >
                    <Route index element={<CryptoGridView />} />
                    <Route path=':id' element={<CryptoPageView />} />
                </Route>
                <Route path='/login' element={<LoginView />} />
                <Route path='*' element={<Page404View />} />
            </Routes>
        </Router>
    </UserContextProvider>
)
