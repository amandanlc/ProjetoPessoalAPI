import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Musicas from './pages/Músicas'
import IG from './pages/IG'
import PH from './pages/PH'
import Pedrinho from './pages/Pedrinho'
import Kevin from './pages/Kevin'
import Ryan from './pages/Ryan'
import Hariel from './pages/Hariel'
import PageBase from './pages/PageBase'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Musicas /> }></Route>
                    <Route path="/ig" element={ <IG /> }></Route>
                    <Route path="/ph" element={ <PH /> }></Route>
                    <Route path="/pedrinho" element={ <Pedrinho /> }></Route>
                    <Route path="/kevin" element={ <Kevin /> }></Route>
                    <Route path="/ryan" element={ <Ryan /> }></Route>
                    <Route path="/hariel" element={ <Hariel /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes