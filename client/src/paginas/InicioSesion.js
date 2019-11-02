import React, { Component } from "react";
import IniciarSesionFormulario from "../componentes/IniciarSesionFormulario";

class InicioSesion extends Component {
  state = {
    loading: true,
    error: null,
    form: {
      correo: "",
      contrasena: ""
    }
  };

  handleChange = e => {
    this.setState({
      /*   form: nextForm */
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.form);
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
          <IniciarSesionFormulario
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            formValues={this.state.form}
          />
        </div>
      </div>
    );
  }
}

export default InicioSesion;
