import React, { Component } from "react";

class RegistroFormulario extends Component {
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
              type="text"
              className="form-control"
              placeholder="Ingresa nombre"
              name="nombre"
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa apellidos"
              name="apellidos"
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Ingresa correo"
              name="correo"
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Ingresa contraseña"
              name="contrasena"
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa telefono"
              name="telefono"
              onChange={this.props.onChange}
            />
          </div>

          <div className="form-group">
            <button
              onClick={this.handleClick}
              className="btn btn-secondary btn-block"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistroFormulario;
