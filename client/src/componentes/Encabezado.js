import React from 'react';
import { Link } from 'react-router-dom';


const Encabezado = (props) => {
  const btn = props.hasOwnProperty('agregar') ? <Link to="agregar-publicacion" className="text-dark"><i class="fas fa-plus"></i></Link>: props.hasOwnProperty('cerrar') ? <Link to="agregar-publicacion" className="text-dark"><i class="fas fa-times"></i></Link> : '';
  return (
    <div className="pos-f-t">
      <nav className="navbar navbar-light">
        <button className="outline-none pl-0 pr-0 navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h2>Find Me</h2>  
        {btn}
      </nav>
      <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
        <div className=" p-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
    </div>
  );
};

export default Encabezado;