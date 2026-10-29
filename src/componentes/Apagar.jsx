import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../api';

function Apagar() {

    // id digitado na caixa de busca
    const [idBusca, setIdBusca] = useState('');

    // Controla o que é exibido (renderização condicional):
    //   'busca'      -> só a caixa para digitar o id
    //   'achou'      -> dados do filme + botão para apagar
    //   'nao-achou'  -> mensagem de não encontrado
    const [situacao, setSituacao] = useState('busca');

    const [filme, setFilme] = useState(null);

    const navigate = useNavigate();

    // Busca os dados do id digitado.
    const handleProcurar = (event) => {
        event.preventDefault();
        axios.get(`${API_URL}/${idBusca.trim()}`)
            .then(res => {
                setFilme(res.data);
                setSituacao('achou');
            })
            .catch(err => {
                console.log(err);
                setSituacao('nao-achou');
            });
    }

    // Apaga o filme na API (delete) e volta para Inicio.
    const handleApagar = () => {
        axios.delete(`${API_URL}/${filme.id}`)
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    }

    // ---------- Não achou ----------
    if (situacao === 'nao-achou') {
        return (
            <div className='caixa'>
                <h3>Apagar filme</h3>
                <p className='erro'>Filme com id "{idBusca}" não encontrado.</p>
                <div className='botoes'>
                    <Link to="/" className='botao'>Voltar</Link>
                </div>
            </div>
        )
    }

    // ---------- Achou: mostra os dados e pede confirmação ----------
    if (situacao === 'achou') {
        return (
            <div className='caixa'>
                <h3>Apagar filme</h3>

                <div className='dados'>
                    <p><strong>Id:</strong> {filme.id}</p>
                    <p><strong>Nome:</strong> {filme.nome}</p>
                    <p><strong>Gênero:</strong> {filme.genero}</p>
                    <p><strong>Ano:</strong> {filme.ano}</p>
                </div>

                <p>Deseja mesmo apagar este filme?</p>

                <div className='botoes'>
                    <button type='button' className='botao perigo' onClick={handleApagar}>Apaga</button>
                    <Link to="/" className='botao'>Cancela</Link>
                </div>
            </div>
        )
    }

    // ---------- Inicial: só a caixa para digitar o id ----------
    return (
        <div className='caixa'>
            <h3>Apagar filme</h3>

            <form onSubmit={handleProcurar}>
                <label htmlFor="idBusca">Id do filme:</label>
                <input type="text" id='idBusca' required
                       placeholder='Digite o id'
                       value={idBusca}
                       onChange={e => setIdBusca(e.target.value)} />

                <div className='botoes'>
                    <button type='submit' className='botao'>Procura</button>
                    <Link to="/" className='botao'>Cancela</Link>
                </div>
            </form>
        </div>
    )
}

export default Apagar
