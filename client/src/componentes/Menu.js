import React from 'react';
import { Link } from 'react-router-dom';

const menu = () => {
  return (
    <nav className="border-top pt-2 pb-2 fixed-bottom bg-light d-flex justify-content-center">
      <div className="w-75 d-flex justify-content-between ">
        <Link to="/inicio" className="active-menu text-center">
          <i className="fas fa-paw"></i>
          <small className="w-100 d-block text-dark">Perdidos</small>
        </Link>
        <Link to="/comparacion" className="text-dark text-center">
          <i className="fas fa-paw"></i>
          <small className="w-100 d-block">Rescatados</small>
        </Link>
        <Link to="/productos" className="text-dark text-center">
          <i className="fas fa-paw"></i>
          <small className="w-100 d-block">Rescatados</small>
        </Link>
      </div>
    </nav>
  );
}

export default menu;