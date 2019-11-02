import React from 'react';
import { Link } from 'react-router-dom';

// Import componentes
import Menu from '../componentes/Menu';
import Titulo from '../componentes/Titulo';


const Publicaciones = ()=> {
  return(
    <React.Fragment>
      <Titulo titulo="Publicaciones"/>
      <section className="d-flex justify-content-end w-100">
        <Link to="/agregar-publicacion" className="btn btn-primary-t"><i className="fas fa-plus-circle mr-1 "></i> Agregar</Link>

      </section>
      <Menu/>
    </React.Fragment>
  );
};

export default Publicaciones;