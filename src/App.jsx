import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Inicio from './componentes/Inicio';
import Ler from './componentes/Ler';
import Criar from './componentes/Criar';
import Alterar from './componentes/Alterar';
import Apagar from './componentes/Apagar';

function App() {
    return (
        <BrowserRouter>
            <div className='container'>
                <Cabecalho />
                <main>
                    <Routes>
                        <Route path='/' element={<Inicio />} />
                        <Route path='/ler/:id' element={<Ler />} />
                        <Route path='/criar' element={<Criar />} />
                        <Route path='/alterar' element={<Alterar />} />
                        <Route path='/apagar' element={<Apagar />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
