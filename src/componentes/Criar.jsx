import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../api';

function Criar() {

    const [values, setValues] = useState({
        nome: '',
        genero: '',
        ano: ''
    });

    const navigate = useNavigate();

    // Grava o filme na API (post) e volta para Inicio.
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(API_URL, values)
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    }

    return (
        <div className='caixa'>
            <h3>Criar filme</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id='nome' required
                       placeholder='Digite o nome'
                       value={values.nome}
                       onChange={e => setValues({ ...values, nome: e.target.value })} />

                <label htmlFor="genero">Gênero:</label>
                <input type="text" id='genero' required
                       placeholder='Digite o gênero'
                       value={values.genero}
                       onChange={e => setValues({ ...values, genero: e.target.value })} />

                <label htmlFor="ano">Ano:</label>
                <input type="text" id='ano' required
                       placeholder='Digite o ano'
                       value={values.ano}
                       onChange={e => setValues({ ...values, ano: e.target.value })} />

                <div className='botoes'>
                    <button type='submit' className='botao'>Criar</button>
                    <Link to="/" className='botao'>Cancelar</Link>
                </div>
            </form>
        </div>
    )
}

export default Criar
