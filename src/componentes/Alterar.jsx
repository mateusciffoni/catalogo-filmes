import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../api';

function Alterar() {

    // id digitado na caixa de busca
    const [idBusca, setIdBusca] = useState('');

    // Controla o que é exibido (renderização condicional):
    //   'busca'      -> só a caixa para digitar o id
    //   'achou'      -> formulário com os dados para edição
    //   'nao-achou'  -> mensagem de não encontrado
    const [situacao, setSituacao] = useState('busca');

    const [values, setValues] = useState({
        nome: '',
        genero: '',
        ano: ''
    });

    const navigate = useNavigate();

    // Busca os dados do id digitado.
    const handleProcurar = (event) => {
        event.preventDefault();
        axios.get(`${API_URL}/${idBusca.trim()}`)
            .then(res => {
                setValues(res.data);
                setSituacao('achou');
            })
            .catch(err => {
                console.log(err);
                setSituacao('nao-achou');
            });
    }

    // Grava as alterações (put) e volta para Inicio.
    const handleAlterar = (event) => {
        event.preventDefault();
        axios.put(`${API_URL}/${values.id}`, values)
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    }

    // ---------- Não achou ----------
    if (situacao === 'nao-achou') {
        return (
            <div className='caixa'>
                <h3>Alterar filme</h3>
                <p className='erro'>Filme com id "{idBusca}" não encontrado.</p>
                <div className='botoes'>
                    <Link to="/" className='botao'>Voltar</Link>
                </div>
            </div>
        )
    }

    // ---------- Achou: formulário para edição ----------
    if (situacao === 'achou') {
        return (
            <div className='caixa'>
                <h3>Alterar filme (id {values.id})</h3>

                <form onSubmit={handleAlterar}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id='nome' required
                           value={values.nome}
                           onChange={e => setValues({ ...values, nome: e.target.value })} />

                    <label htmlFor="genero">Gênero:</label>
                    <input type="text" id='genero' required
                           value={values.genero}
                           onChange={e => setValues({ ...values, genero: e.target.value })} />

                    <label htmlFor="ano">Ano:</label>
                    <input type="text" id='ano' required
                           value={values.ano}
                           onChange={e => setValues({ ...values, ano: e.target.value })} />

                    <div className='botoes'>
                        <button type='submit' className='botao'>Altera</button>
                        <Link to="/" className='botao'>Cancela</Link>
                    </div>
                </form>
            </div>
        )
    }

    // ---------- Inicial: só a caixa para digitar o id ----------
    return (
        <div className='caixa'>
            <h3>Alterar filme</h3>

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

export default Alterar
