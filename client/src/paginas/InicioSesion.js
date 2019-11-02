import React, { Component } from "react";
import { Link } from "react-router-dom";
import IniciarSesionFormulario from "../componentes/IniciarSesionFormulario";

class InicioSesion extends Component {
  handleSubmit = async e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <div className="container h-100 bg-dar">
          <div className="d-flex flex-column align-items-center">
            <h1>Logo</h1>
            <h3>Nombre App</h3>
            <h5>Inicio de sesion</h5>
          </div>
          <IniciarSesionFormulario onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default InicioSesion;
