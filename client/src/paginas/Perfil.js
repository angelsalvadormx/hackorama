import React, { Component, Fragment } from "react";
import Gravatar from "../componentes/Gravatar";
import FormularioUsuario from "../componentes/FormularioUsuario";
import Encabezado from "../componentes/Encabezado";

class Perfil extends Component {
  state = {
    laoding: true,
    error: null,
    data: {
      nombre: "Jorge",
      apellidos: "Vargas",
      correo: "correo@correo",
      telefono: "312333",
      contrasena: "1235"
    }
  };

  fetchData = async () => {
    this.setState({ laoding: true, error: null });
  };

  handleChange = e => {
    this.setState({
      /*   form: nextForm */
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.data);
  };

  componentDidMount() {
    // this.fetchData();
  }

  render() {
    const data = this.state.data;
    return (
      <Fragment>
        <Encabezado />
        <div className="d-flex flex-column align-items-center">
          <h5 className="mb-5">Mi perfil</h5>
          <Gravatar correo={data.correo} />
          <FormularioUsuario
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            formValues={this.state.data}
            message="Actualizar"
          />
        </div>
      </Fragment>
    );
  }
}

export default Perfil;
