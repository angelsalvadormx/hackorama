import React, { Component } from "react";
import { Link } from "react-router-dom";

import CargandoPagina from "../componentes/CargandoPagina";
import FormularioUsuario from "../componentes/FormularioUsuario";
import EncabezadoPrincipal from "../componentes/EncabezadoPrincipal";
import api from "../api";
import Cargador from "../componentes/Cargador";

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

    this.setState({ loading: true, error: null });

    try {
      await api.create("user", this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/inicio-sesion");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidMount() {
    this.setState({ loading: false, error: null });
  }
  render() {
    if (this.state.loading === true) {
      return <Cargador msg="Creando cuenta" />;
    }
    return (
      <div className="container">
        <div className="row d-flex flex-column">
          <nav className="pl-4 pr-4 pt-4 d-flex justify-content-end">
            <Link to="/principal">
              <i className="text-dark fas fa-times"></i>
            </Link>
          </nav>
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
