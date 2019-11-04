import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contexto from "../Contexto";

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
    this.props.history.push("/publicaciones");
    //Contexto.value.activateAuth;
  };
  render() {
    return (
      <div className="container h-100">
        <div className="row d-flex flex-column h-100">
          <nav className="pl-4 pr-4 pt-4 d-flex justify-content-end">
            <Link to="/principal">
              <i className="text-dark fas fa-times"></i>
            </Link>
          </nav>
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
