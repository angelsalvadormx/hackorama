import React, { Component, Fragment } from "react";
import Gravatar from "../componentes/Gravatar";
import FormularioUsuario from "../componentes/FormularioUsuario";
import Encabezado from "../componentes/Encabezado";
import api from "../api";

class Perfil extends Component {
  state = {
    laoding: true,
    error: null,
    data: ""
  };

  fetchData = async () => {
    this.setState({ laoding: true, error: null });

    console.log(this.props.match.params.id);

    try {
      const data = await api.read("user", this.props.match.params.id);
      console.log(data);
      this.setState({ laoding: false, data: data });
    } catch (error) {
      this.setState({ laoding: false, error: error });
    }
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
    this.fetchData();
  }

  render() {
    return (
      <Fragment>
        <Encabezado />
        <div className="d-flex flex-column align-items-center">
          <h5 className="mb-3">Mi perfil</h5>
          <Gravatar correo="correo@correo.com" />

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
