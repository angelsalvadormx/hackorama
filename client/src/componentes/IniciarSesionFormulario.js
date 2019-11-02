import React, { Component } from "react";

class IniciarSesionFormulario extends Component {
  state = {};

  handleClick = e => {
    console.log("Button was clicked");
  };

  render() {
    return (
      <div className="row d-flex justify-content-center">
        <form className="col-11 col-lg-6" onSubmit={this.props.onSubmit}>
          <div class="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingresa correo"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Ingresa contraseña"
            />
          </div>
          <div className="form-group d-flex flex-column align-items-end">
            <label>Recuperar cuenta</label>
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
