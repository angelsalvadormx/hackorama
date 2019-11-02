import React, { Component } from "react";
import { Link } from "react-router-dom";

class IniciarSesionFormulario extends Component {
  state = {};

  handleClick = e => {
    console.log("Button was clicked");
  };

  render() {
    return (
      <div className="row d-flex justify-content-center">
        <form className="col-11 col-lg-6" onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="correo"
              placeholder="Ingresa correo"
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="contrasena"
              placeholder="Ingresa contraseña"
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group d-flex flex-column align-items-end">
            <Link to="/recuperar-cuenta">Recuperar cuenta</Link>
          </div>
          <div className="form-group">
            <button
              onClick={this.handleClick}
              className="btn btn-secondary btn-block"
            >
              Iniciar sesion
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default IniciarSesionFormulario;
