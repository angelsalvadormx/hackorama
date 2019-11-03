import React from "react";
import { Link } from "react-router-dom";
// active -->

const Encabezado = () => {
  return (
    <div className="pos-f-t">
      <nav className="navbar navbar-light">
        <button
          className="outline-none pl-0 pr-0 navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h2>Find Me</h2>
        <Link to="/agregar-publicacion-menu" className="text-dark">
          <i className="fas fa-plus"></i>
        </Link>
        <div
          className="collapse navbar-collapse"
          id="navbarToggleExternalContent"
        >
          <div className="navbar-nav pb-3">
            <a className="nav-item nav-link " href="/perfil/">
            <i class="fas fa-user-circle"></i> Perfil
            </a>
            <a className="nav-item nav-link" href="#">
              <i className="fas fa-sign-out-alt"></i> Cerrar sesión
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Encabezado;
