import React from 'react';
import { Link } from 'react-router-dom';

const menu = ({ btnActivo }) => {
  return (
    <nav className="border-top pt-2 pb-2 fixed-bottom bg-light d-flex justify-content-center">
      <div className="w-75 d-flex justify-content-between ">
        <Link to="#" className={"btn-menu text-center" + (btnActivo == 'permisos' ? ' active-menu' : '')}>
          <i className="fas fa-paw"></i>
          <small className="w-100 d-block ">Perdidos</small>
        </Link>
        <Link to="#" className={"btn-menu text-center" + (btnActivo == 'rescatados' ? ' active-menu' : '')}>
          <i className="fas fa-paw"></i>
          <small className="w-100 d-block">Rescatados</small>
        </Link>
        <Link to="#" className={"btn-menu text-center" + (btnActivo == 'sinHogar' ? ' active-menu' : '')}>
          <i className="fas fa-paw"></i>
          <small className="w-100 d-block">Sin hogar</small>
        </Link>
      </div>
    </nav>
  );
}

export default menu;