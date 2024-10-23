import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListarVagas from './pages/ListarVagas';
import CadastroReserva from './pages/CadastroReserva';

const App = () => {
    return (
        <div>
            <h1>Controle de Estacionamento</h1>
            <ListarVagas />
            <CadastroReserva />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
