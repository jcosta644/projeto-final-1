import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import NavCliente from '../../components/NavCliente';
import HistoricoCompras from '../../components/HistoricoCompras';
import DetalheProduto from '../../components/DetalheProduto';

function Cliente() {
  const client = {
    name: 'Elisberto',
  }
  return (
    <>
      <Helmet>
        <title>ALLBERTINHO | { client.name }</title>
      </Helmet>
      <Header />
      <main>
        <NavCliente name={client.name} />
        <section>
          <Switch>
            <Route exact path="/voce/tem" component={HistoricoCompras} />
            {/*<Route path="/voce/quer" component={Favoritos} />*/}
            <Route path="/voce/tem/:id" component={DetalheProduto} />
          </Switch>
        </section>
      </main>
    </>
  )
}

export default Cliente;
