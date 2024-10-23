// src/pages/CadastroReserva.js
import React from 'react';
import FormCadastro from '../components/FormCadastro';

const CadastroReserva = () => {
    const handleCadastro = (reserva) => {
        console.log('Reserva cadastrada:', reserva);
        // Aqui você pode adicionar a lógica para salvar a reserva
    };

    return (
        <div>
            <h2>Cadastro de Reserva</h2>
            <FormCadastro onCadastrar={handleCadastro} />
        </div>
    );
};

export default CadastroReserva;
