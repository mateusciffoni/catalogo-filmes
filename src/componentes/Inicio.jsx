import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { API_URL } from '../api';

function Inicio() {

    const [filmes, setFilmes] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    // Busca todos os filmes uma única vez, na renderização inicial.
    useEffect(() => {
        axios.get(API_URL)
            .then(res => setFilmes(res.data))
            .catch(err => {
                console.log(err);
                setErro(true);
            })
            .finally(() => setCarregando(false));
    }, []);

    if (carregando) return <p className='mensagem'>Carregando...</p>;
    if (erro) return <p className='mensagem erro'>Erro ao buscar os filmes no servidor.</p>;
    if (filmes.length === 0) return <p className='mensagem'>Nenhum filme cadastrado.</p>;

    // Exibe apenas ID e NOME. Clicar no filme navega para a página Ler.
    return (
        <ul className='lista'>
            {
                filmes.map(f => (
                    <li key={f.id}>
                        <Link to={`/ler/${f.id}`} className='item'>
                            <span className='item-id'><strong>Id:</strong> {f.id}</span>
                            <span><strong>Nome:</strong> {f.nome}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Inicio
