import React from 'react';
// Import componentes
import Menu from '../componentes/Menu';
import Titulo from '../componentes/Titulo';

const ComparacionMAscotas = ()=>{
  return(
    <React.Fragment>
      <Titulo titulo="Posibles coincidencias"/>
      <Menu/>
    </React.Fragment>
  );
};

export default ComparacionMAscotas;