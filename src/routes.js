import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Filme } from './pages/filme'

import Home from './pages/home'
import NotFound from './pages/not-found'
import Salvos from './pages/salvos'

const MyRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home/> } />
                <Route exact path="/filme/:id" element={ <Filme /> } />
                <Route exact path="/favoritos" element={ <Salvos /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes