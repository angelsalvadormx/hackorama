import React, { Component } from "react";
import { Link } from "react-router-dom";
import RegistroFormulario from "../componentes/RegistroFormulario";
import CargandoPagina from "../componentes/CargandoPagina";

class Registro extends Component {
  state = {
    loading: true,
    error: null
  };

  handleSubmit = async e => {
    e.preventDefault();
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
          <RegistroFormulario onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default Registro;
