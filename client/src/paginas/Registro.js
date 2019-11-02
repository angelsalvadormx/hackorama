import React, { Component } from "react";
import RegistroFormulario from "../componentes/RegistroFormulario";
import CargandoPagina from "../componentes/CargandoPagina";

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
    /*  const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value; */

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
      <div>
        <div className="container h-100 bg-dar">
          <div className="d-flex flex-column align-items-center">
            <h1>Logo</h1>
            <h3 className="">Nombre App</h3>
            <h5>Registrate</h5>
          </div>
          <RegistroFormulario
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            formValues={this.state.form}
          />
        </div>
      </div>
    );
  }
}

export default Registro;
