import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCliente from './screens/CadastroCliente';
import Inicial from './screens/Inicial';
import Produto from './screens/Produto';
import Admin from './screens/Admin';
import Cliente from './screens/Cliente';
import Login from './screens/Login';
import QuatroZeroQuatro from './screens/QuatroZeroQuatro';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route path="/voce" component={() => <Cliente name="Elisberto" />} />
      <Route path="/cadastro" component={CadastroCliente} />
      <Route path="/voce-quer/:id" component={() => <Produto name="Nome do produto" />} />
      <Route path="/" component={Inicial} exact />
      <Route component={QuatroZeroQuatro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
