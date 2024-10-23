import React, { useState } from 'react';

const FormCadastro = ({ onCadastrar }) => {
    const [nome, setNome] = useState('');
    const [placa, setPlaca] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCadastrar({ nome, placa });
        setNome('');
        setPlaca('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label>
                <input 
                    type="text" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Placa:</label>
                <input 
                    type="text" 
                    value={placa} 
                    onChange={(e) => setPlaca(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default FormCadastro;
