// src/pages/ListarVagas.js
import React, { useState } from 'react';
import VagaCard from '../components/VagaCard';

const ListarVagas = () => {
    const [vagas, setVagas] = useState([
        { id: 1, numero: 1, status: false },
        { id: 2, numero: 2, status: false },
        { id: 3, numero: 3, status: false },
        // Adicione mais vagas conforme necessário
    ]);

    const reservarVaga = (id) => {
        setVagas(vagas.map(vaga => 
            vaga.id === id ? { ...vaga, status: true } : vaga
        ));
    };

    return (
        <div>
            <h2>Lista de Vagas</h2>
            <div className="vaga-list">
                {vagas.map(vaga => (
                    <VagaCard key={vaga.id} vaga={vaga} onReservar={reservarVaga} />
                ))}
            </div>
        </div>
    );
};

export default ListarVagas;
