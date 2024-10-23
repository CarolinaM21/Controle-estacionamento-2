import React from 'react';

const VagaCard = ({ vaga, onReservar }) => {
    const { id, numero, status } = vaga;

    return (
        <div className="vaga-card">
            <h3>Vaga #{numero}</h3>
            <p>Status: {status ? 'Ocupada' : 'Livre'}</p>
            <button onClick={() => onReservar(id)} disabled={status}>
                {status ? 'Reservada' : 'Reservar'}
            </button>
        </div>
    );
};

export default VagaCard;
