import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header'

function Inicial() {

  return (
    <>
      <Helmet>
        <title>ALLBERTINHO</title>
      </Helmet>
      <Header />
      <main>
        <h2>Página inicial!</h2>
      </main>
    </>
  )
}

export default Inicial;
