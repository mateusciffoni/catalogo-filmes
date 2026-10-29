import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../api';

function Ler() {

    // Pega o id enviado na URL ( <Link to={`/ler/${f.id}`}> ).
    const { id } = useParams();

    const [filme, setFilme] = useState(null);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        axios.get(`${API_URL}/${id}`)
            .then(res => setFilme(res.data))
            .catch(err => {
                console.log(err);
                setErro(true);
            });
    }, [id]);

    return (
        <div className='caixa'>
            <h3>Dados do filme</h3>

            { erro && <p className='erro'>Filme não encontrado.</p> }
            { !erro && !filme && <p>Carregando...</p> }

            { filme && (
                <div className='dados'>
                    <p><strong>Id:</strong> {filme.id}</p>
                    <p><strong>Nome:</strong> {filme.nome}</p>
                    <p><strong>Gênero:</strong> {filme.genero}</p>
                    <p><strong>Ano:</strong> {filme.ano}</p>
                </div>
            ) }

            <div className='botoes'>
                <Link to="/" className='botao'>Cancelar</Link>
            </div>
        </div>
    )
}

export default Ler
