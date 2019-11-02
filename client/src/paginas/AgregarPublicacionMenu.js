import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AgregarPublicacionMenu = () => {
  return (
    <Fragment>
      <nav className="pl-4 pr-4 pt-4 d-flex justify-content-end">
        <Link to="/publicaciones" ><i className="text-dark fas fa-times"></i></Link>
      </nav>
      <header className="position-fixed w-100 text-center pt-5 pb-5">
        <h3>Reportar</h3>
      </header>
      <main className="h-100 d-flex align-items-center justify-content-center flex-column">
        <Link to="/agregar-publicacion/1" className="mb-3 w-50 btn btn-gray btn-lg">
          <i className="fas fa-paw"></i>
          <small className="w-100 d-block text-dark">Perdido</small>
        </Link>
        <Link to="/agregar-publicacion/2" className="mb-3 w-50 btn btn-gray btn-lg">
          <i className="fas fa-paw"></i>
          <small className="w-100 d-block text-dark">Rescatados</small>
        </Link>
        <Link to="/agregar-publicacion/3" className="w-50 btn btn-gray btn-lg">
          <i className="fas fa-paw"></i>
          <small className="w-100 d-block text-dark">Sin hogar</small>
        </Link>
      </main>
    </Fragment>
  );
};

export default AgregarPublicacionMenu;