import React, { Component } from "react";

import CargandoPagina from "../componentes/CargandoPagina";
import FormularioUsuario from "../componentes/FormularioUsuario";
import EncabezadoPrincipal from "../componentes/EncabezadoPrincipal";

class Registro extends Component {
  state = {
    loading: true,
    error: null,
    form: {
      nombre: "",
      apellidos: "",
      correo: "",
      contrasena: "",
      telefono: ""
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

  componentDidMount() {
    this.setState({ loading: false, error: null });
  }
  render() {
    if (this.state.loading === true) {
      return <CargandoPagina />;
    }
    return (
      <div className="container h-100">
        <div className="row d-flex flex-column h-100">
          <EncabezadoPrincipal />

          <div className="d-flex flex-column align-items-center mt-5">
            <h5>Registrate</h5>
            <FormularioUsuario
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              formValues={this.state.form}
              message="Registrarme"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
