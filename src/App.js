import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListarVagas from './pages/ListarVagas';
import CadastroReserva from './pages/CadastroReserva';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Controle de Estacionamento</h1>
        <Switch>
          <Route path="/cadastro" component={CadastroReserva} />
          <Route path="/listar" component={ListarVagas} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
