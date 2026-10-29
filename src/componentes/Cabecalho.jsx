import React from 'react'
import { NavLink } from 'react-router-dom'

function Cabecalho() {
    return (
        <header className='cabecalho'>
            <h2>CATÁLOGO DE FILMES</h2>
            <ul className='menu'>
                <li><NavLink to="/" end>INÍCIO</NavLink></li>
                <li><NavLink to="/criar">CRIAR</NavLink></li>
                <li><NavLink to="/alterar">ALTERAR</NavLink></li>
                <li><NavLink to="/apagar">APAGAR</NavLink></li>
            </ul>
        </header>
    )
}

export default Cabecalho
