import React, { Component } from "react";

import IniciarSesionFormulario from "../componentes/IniciarSesionFormulario";
import EncabezadoPrincipal from "../componentes/EncabezadoPrincipal";

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
      <div className="container h-100">
        <div className="row d-flex flex-column h-100">
          <EncabezadoPrincipal />
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
