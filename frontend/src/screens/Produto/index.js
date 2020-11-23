import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';

function Produto( props ) {
  return (
    <>
      <Helmet>
        <title>ALLBERTINHO | { props.name }</title>
      </Helmet>
      <Header />
      <main>
        <h2>Detalhes do produto que vc quer simmmm! <span>😏😏😏</span></h2>
      </main>
    </>
  )
}

export default Produto;
